param([string]$CredentialsFile = "$PSScriptRoot/../.runtime/deployment-admin-passwords.txt")
$ErrorActionPreference = 'Stop'
$checks = [System.Collections.Generic.List[object]]::new()
function Check($Name, [scriptblock]$Action) {
  try { & $Action; $checks.Add([pscustomobject]@{check=$Name;passed=$true}); Write-Host "PASS $Name" }
  catch { $checks.Add([pscustomobject]@{check=$Name;passed=$false}); Write-Host "FAIL $Name" }
}
$credentials = Get-Content -LiteralPath $CredentialsFile
foreach ($app in @(
  @{name='AURUM';url='https://aurum-coffee-pxik.onrender.com';me='/api/v1/users/me';data='/api/v1/orders/my'},
  @{name='LOGICORE';url='https://logicore-p1nx.onrender.com';me='/api/v1/auth/me';data='/api/v1/dashboard'}
)) {
  Check "$($app.name) database health" {
    $health = Invoke-RestMethod "$($app.url)/actuator/health" -NoProxy -TimeoutSec 180
    if ($health.status -ne 'UP') { throw 'Unhealthy' }
  }
  Check "$($app.name) frontend" {
    $page = Invoke-WebRequest $app.url -UseBasicParsing -NoProxy -TimeoutSec 30
    if ($page.StatusCode -ne 200 -or $page.Content -notmatch '<script') { throw 'Missing frontend' }
  }
  Check "$($app.name) anonymous protection" {
    $response = Invoke-WebRequest "$($app.url)$($app.me)" -SkipHttpErrorCheck -NoProxy -TimeoutSec 30
    if ($response.StatusCode -notin @(401,403)) { throw 'Private API not protected' }
  }
  Check "$($app.name) admin session and database read" {
    $password = ($credentials | Where-Object { $_ -like "$($app.name) ADMIN_PASSWORD:*" }) -replace '^.*ADMIN_PASSWORD: ',''
    if (!$password) { throw 'Missing credentials' }
    $csrf = Invoke-RestMethod "$($app.url)/api/v1/auth/csrf" -SessionVariable session -NoProxy -TimeoutSec 30
    $headers = @{}; $headers[$csrf.headerName] = $csrf.token
    $body = @{email='jeffreyrc20@gmail.com';password=$password} | ConvertTo-Json
    $user = Invoke-RestMethod "$($app.url)/api/v1/auth/login" -Method Post -WebSession $session -Headers $headers -ContentType application/json -Body $body -NoProxy -TimeoutSec 30
    if ($user.role -notin @('ADMIN','SUPER_ADMIN')) { throw 'Admin access missing' }
    $me = Invoke-RestMethod "$($app.url)$($app.me)" -WebSession $session -NoProxy -TimeoutSec 30
    if ($me.email -ne 'jeffreyrc20@gmail.com') { throw 'Session not persisted' }
    $null = Invoke-RestMethod "$($app.url)$($app.data)" -WebSession $session -NoProxy -TimeoutSec 30
  }
}
Check 'AURUM public catalog' {
  $catalog = Invoke-RestMethod 'https://aurum-coffee-pxik.onrender.com/api/v1/products' -NoProxy -TimeoutSec 30
  if (!$catalog) { throw 'Missing catalog' }
}
$checks | ConvertTo-Json | Set-Content "$PSScriptRoot/../docs/deployment-checks.json"
if ($checks.passed -contains $false) { exit 1 }

