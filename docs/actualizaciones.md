# Actualizaciones

La edición instalada consulta el [canal oficial](https://github.com/Gy5261/Tutor-IA/releases/latest). La actualización puede requerir reinicio y depende de la conexión del equipo. El portable se reemplaza manualmente.

## Qué descargar

| Archivo | Uso |
| --- | --- |
| `Tutor-IA-Setup-6.1.8.exe` | Instalador |
| `Tutor-IA-Portable.exe` | Edición portable |
| `release-manifest.json` | Versión, tamaño, hashes y firma del instalador |
| `latest.yml` y `.blockmap` | Actualización automática |
| `sbom.cdx.json` | Inventario de dependencias publicado |

No mezcles archivos de versiones diferentes.

## Verificar descarga

Descarga el instalador y el manifiesto de la [misma release](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.8). En PowerShell, desde esa carpeta:

```powershell
$manifest = Get-Content -Raw -LiteralPath .\release-manifest.json | ConvertFrom-Json
$installer = Get-Item -LiteralPath .\Tutor-IA-Setup-6.1.8.exe
$hash = (Get-FileHash -LiteralPath $installer.FullName -Algorithm SHA256).Hash
if ($installer.Name -ne $manifest.installer.name -or
    $installer.Length -ne $manifest.installer.size -or
    $hash -ne $manifest.installer.sha256) { throw 'El archivo no coincide.' }
Get-AuthenticodeSignature -LiteralPath $installer.FullName
```

Los hashes de 6.1.8 también están en [checksums.txt](../checksums.txt). El estado actual es `NotSigned`; un hash correcto no equivale a firma digital.

Si la comprobación falla, no ejecutes el archivo. Descárgalo otra vez o consulta [soporte](soporte.md).

## Si falla una actualización

Conserva el error y tus datos. Reabre la aplicación; si no arranca, descarga el instalador estable oficial. No borres el perfil ni fuerces una versión anterior sin ayuda.

Cambiar esta documentación no actualiza por sí solo los equipos ni reemplaza los ejecutables.

[Guías](README.md)
