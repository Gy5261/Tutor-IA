# Tutor-IA

Tutor-IA es una plataforma educativa de inteligencia artificial para Windows, diseñada para aprendizaje personalizado, herramientas integradas y almacenamiento local-first.

## Descargar

El ejecutable oficial se publica exclusivamente en la sección **Releases** de este repositorio. El repositorio público no contiene el código fuente del Core ni del Backend.

## Privacidad

- Conversaciones, historial, preferencias, configuración, progreso y memoria permanecen en el equipo.
- GitHub se utiliza únicamente para distribuir el ejecutable y su suma de verificación.
- Tutor-IA no usa este repositorio como servidor ni como almacenamiento personal.
- Las conexiones a Google y proveedores de modelos ocurren únicamente cuando el usuario activa esas funciones.

Consulta [PRIVACIDAD.md](PRIVACIDAD.md) para conocer el límite local-first completo.

## Integridad

Cada release incluye `Tutor-IA.exe` y `checksums.txt`. Verifica el archivo en PowerShell:

```powershell
Get-FileHash .\Tutor-IA.exe -Algorithm SHA256
```
