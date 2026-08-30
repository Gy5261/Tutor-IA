# Tutor-IA

Tutor-IA es una plataforma educativa de inteligencia artificial para Windows, diseñada para aprendizaje personalizado, herramientas integradas y almacenamiento local-first.

## Descargar

El ejecutable oficial se publica exclusivamente en la sección **Releases** de este repositorio. El repositorio público no contiene el código fuente del Core ni del Backend.

La versión portable `v1.0.0` necesita una única migración manual al primer instalador firmado. Desde la edición instalable, Tutor-IA comprueba, descarga y aplica las versiones nuevas desde este mismo canal sin borrar el perfil local.

Cada versión actualizable publica:

- `Tutor-IA-Setup-X.Y.Z.exe` (instalador NSIS firmado);
- `.blockmap` (descarga diferencial);
- `latest.yml` (versión, tamaño y SHA-512);
- `release-manifest.json` (SHA-256, SHA-512 y estado de firma).

## Privacidad

- Conversaciones, historial, preferencias, configuración, progreso y memoria permanecen en el equipo.
- GitHub se utiliza únicamente para distribuir el ejecutable y su suma de verificación.
- Tutor-IA no usa este repositorio como servidor ni como almacenamiento personal.
- Las conexiones a Google y proveedores de modelos ocurren únicamente cuando el usuario activa esas funciones.

Consulta [PRIVACIDAD.md](PRIVACIDAD.md) para conocer el límite local-first completo.

## Integridad

Las versiones instalables validan SHA-512 y la identidad Authenticode del editor antes de reemplazar archivos. También puedes verificar manualmente el instalador en PowerShell:

```powershell
Get-FileHash .\Tutor-IA-Setup-X.Y.Z.exe -Algorithm SHA256
Get-AuthenticodeSignature .\Tutor-IA-Setup-X.Y.Z.exe
```
