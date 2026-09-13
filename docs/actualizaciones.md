# Actualizaciones e integridad

## Canal de distribución

La edición instalada de Tutor-IA consulta las [Releases oficiales](https://github.com/Gy5261/Tutor-IA/releases/latest). La política automática corresponde al instalador Windows NSIS; desarrollo, portable y Microsoft Store tienen políticas distintas.

La aplicación gestiona comprobación, descarga, instalación y recuperación. La actualización puede requerir reinicio. No se garantiza que una release se instale al mismo tiempo en todos los equipos: depende de conectividad y del ciclo del cliente.

## Archivos de una release

| Archivo | Función |
| --- | --- |
| `Tutor-IA-Setup-<versión>.exe` | Instalador que ejecuta el usuario |
| `.exe.blockmap` | Información para descarga diferencial |
| `latest.yml` | Versión, descriptor, tamaño y SHA-512 |
| `release-manifest.json` | Identificación, tamaño, hashes y estado Authenticode |

Los artefactos de versiones diferentes no deben mezclarse. El [checksums.txt](../checksums.txt) de este repositorio identifica explícitamente una versión; para cualquier otra, usa su propio manifiesto.

## Verificar una descarga

Para la versión 4.1.6, descarga el instalador y manifiesto de [la misma release](https://github.com/Gy5261/Tutor-IA/releases/tag/v4.1.6). Desde esa carpeta:

```powershell
$manifest = Get-Content -Raw -LiteralPath .\release-manifest.json | ConvertFrom-Json
$installer = Get-Item -LiteralPath .\Tutor-IA-Setup-4.1.6.exe
$actualHash = (Get-FileHash -LiteralPath $installer.FullName -Algorithm SHA256).Hash
if ($installer.Name -ne $manifest.installer.name) { throw 'El nombre no coincide.' }
if ($installer.Length -ne $manifest.installer.size) { throw 'El tamaño no coincide.' }
if ($actualHash -ne $manifest.installer.sha256) { throw 'El SHA-256 no coincide.' }
Get-AuthenticodeSignature -LiteralPath $installer.FullName
```

El manifiesto publicado de 4.1.6 declara 137.011.253 bytes y estado `NotSigned`. Su SHA-256 coincide con el digest del asset publicado en GitHub. Eso acredita coherencia del artefacto con el manifiesto, no una firma del editor.

Si falla una comprobación, no ejecutes el archivo. Descarga de nuevo desde la release oficial o [reporta el problema](soporte.md).

## Datos y recuperación

La actualización reemplaza archivos del programa y está configurada para conservar el perfil. No borres el historial o el perfil para solucionar un fallo de actualización.

Si la instalación se interrumpe, vuelve a abrir Tutor-IA. Si no inicia, conserva el mensaje de error y descarga el instalador estable oficial. El sistema contiene mecanismos de recuperación, pero no se promete recuperación automática frente a cualquier fallo del equipo o del disco.

Una actualización de estos documentos en `main` no cambia el instalador publicado ni obliga a reiniciar la aplicación.

[Volver a documentación](README.md)
