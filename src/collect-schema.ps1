# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 unicbm.
param([Parameter(Mandatory)][string]$GameDir, [string]$Output = '.cache/schema.json', [string]$Requests = '.cache/schema-requests.json')
$ErrorActionPreference = 'Stop'
if (Get-Process cs2 -ErrorAction SilentlyContinue) { throw 'Close CS2 before collecting Schema.' }
$root = (Resolve-Path -LiteralPath $GameDir).Path
$gi = Join-Path $root 'game/csgo/gameinfo.gi'
$dump = Join-Path $root 'game/csgo/addons/counterstrikesharp/plugins/SchemaProbe/result.json'
$modules = @{ server = 'game/csgo/bin/win64/server.dll'; engine2 = 'game/bin/win64/engine2.dll'; schemasystem = 'game/bin/win64/schemasystem.dll' }
$hashes = @{}
foreach ($key in $modules.Keys) { $hashes[$key] = (Get-FileHash (Join-Path $root $modules[$key])).Hash.ToLowerInvariant() }
$giBytes = [IO.File]::ReadAllBytes($gi)
$core = Join-Path $root 'game/csgo/addons/counterstrikesharp/configs/core.json'
$coreBytes = [IO.File]::ReadAllBytes($core)
$probe = Join-Path $root 'game/csgo/addons/counterstrikesharp/plugins/SchemaProbe'
if (Test-Path $probe) { throw 'SchemaProbe directory already exists' }
$process = $null
try {
New-Item -ItemType Directory $probe | Out-Null
Copy-Item (Join-Path $PSScriptRoot '../probe/bin/Release/net10.0/SchemaProbe.dll') $probe
Copy-Item (Join-Path $PSScriptRoot '../probe/native/build/Release/schema_probe.dll') $probe
Copy-Item -LiteralPath $Requests -Destination (Join-Path $probe 'requests.json')
    $config = [Text.Encoding]::UTF8.GetString($coreBytes) | ConvertFrom-Json
    $config.PluginAutoLoadEnabled = $false
    $config | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath $core -Encoding utf8
    $text = [Text.Encoding]::UTF8.GetString($giBytes)
    if ($text -notmatch 'Game\s+csgo/addons/metamod') {
        $changed = [regex]::Replace($text, '(?m)^(\s*)Game\s+csgo\s*$', '$1Game csgo/addons/metamod' + "`n" + '$1Game csgo')
        if ($changed -eq $text) { throw 'Cannot locate game search path' }
        [IO.File]::WriteAllText($gi, $changed, [Text.UTF8Encoding]::new($false))
    }
    $started = [DateTime]::UtcNow
    $process = Start-Process -FilePath (Join-Path $root 'game/bin/win64/cs2.exe') -WorkingDirectory (Join-Path $root 'game') -ArgumentList '-dedicated -insecure -ip 127.0.0.1 -port 28019 +sv_lan 1 +map de_dust2 +bot_quota 0 +css_plugins load SchemaProbe' -WindowStyle Hidden -PassThru
    $schema = $null
    while (([DateTime]::UtcNow - $started).TotalSeconds -lt 90) {
        if ($process.HasExited) { throw 'Temporary server exited before Schema export' }
        if (Test-Path -LiteralPath $dump) {
            try { $schema = Get-Content -LiteralPath $dump -Raw | ConvertFrom-Json } catch { $schema = $null }
            if ($schema) { break }
        }
        Start-Sleep -Milliseconds 500
    }
    if (-not $schema) { throw 'Targeted Schema query did not complete' }
    foreach ($key in $modules.Keys) {
        if ((Get-FileHash (Join-Path $root $modules[$key])).Hash.ToLowerInvariant() -ne $hashes[$key]) { throw 'Game changed during collection' }
    }
    $destination = [IO.Path]::GetFullPath($Output)
    New-Item -ItemType Directory -Force (Split-Path $destination) | Out-Null
    @{ schemaVersion = 1; capturedAt = [DateTime]::UtcNow.ToString('o'); provider = 'SchemaSystem_001 targeted query'; modules = $hashes; fields = @($schema) } | ConvertTo-Json -Depth 64 | Set-Content -LiteralPath $destination -Encoding utf8
    Write-Output 'Live Schema captured.'
} finally {
    if ($process -and -not $process.HasExited) { Stop-Process -Id $process.Id -Force }
    [IO.File]::WriteAllBytes($gi, $giBytes)
    [IO.File]::WriteAllBytes($core, $coreBytes)
    foreach ($name in @('SchemaProbe.dll','schema_probe.dll','requests.json','result.json')) { $file=Join-Path $probe $name; if(Test-Path $file){Remove-Item -LiteralPath $file} }
    if(Test-Path $probe){Remove-Item -LiteralPath $probe}
}
