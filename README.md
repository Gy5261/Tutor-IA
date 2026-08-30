# Tutor-IA

Tutor-IA es una plataforma educativa de inteligencia artificial para Windows, diseñada para aprendizaje personalizado, herramientas integradas y almacenamiento local-first.

[Descargar la versión más reciente](https://github.com/Gy5261/Tutor-IA/releases/latest) · [Ver todos los cambios](CHANGELOG.md) · [Privacidad](PRIVACIDAD.md) · [Seguridad](SECURITY.md)

## Descargar

El ejecutable oficial se publica exclusivamente en la sección **Releases** de este repositorio. El repositorio público no contiene el código fuente del Core ni del Backend.

La versión portable `v1.0.0` necesita una única migración manual al primer instalador NSIS. Desde la edición instalable, Tutor-IA comprueba, descarga y aplica las versiones nuevas desde este mismo canal sin borrar el perfil local.

Usa siempre una versión marcada como **Latest**. Las versiones de prueba, borradores y artefactos sin firma no forman parte del canal estable y no deben instalarse en equipos de uso diario.

Cada versión actualizable publica:

- `Tutor-IA-Setup-X.Y.Z.exe` (instalador NSIS verificable);
- `.blockmap` (descarga diferencial);
- `latest.yml` (versión, tamaño y SHA-512);
- `release-manifest.json` (SHA-256, SHA-512 y estado de firma).

## Cómo funcionan las actualizaciones

Tutor-IA consulta el canal oficial sin interrumpir la conversación. Cuando existe una versión más reciente, la aplicación muestra sus cambios y permite iniciar la descarga. El progreso, la validación y la instalación se presentan dentro de la interfaz; la aplicación solo solicita reiniciar cuando el paquete ya está listo.

El actualizador sigue este flujo:

1. compara la versión instalada con la versión estable publicada;
2. descarga el bloque diferencial o el instalador completo cuando sea necesario;
3. valida tamaño y hashes; también valida Authenticode cuando la versión está firmada;
4. prepara una copia de recuperación antes de instalar;
5. reinicia Tutor-IA y confirma que la nueva versión inicia correctamente;
6. restaura la versión anterior si la instalación no puede completarse.

Una actualización nunca se publica como estable si el manifiesto, tamaño o hashes no coinciden con los archivos entregados. El estado Authenticode se declara explícitamente en `release-manifest.json`.

## Datos que se conservan

Las actualizaciones reemplazan únicamente archivos del programa. Se mantienen:

- conversaciones e historial local;
- memoria personalizada y perfil de aprendizaje;
- progreso académico y preferencias;
- configuración de modelos y herramientas;
- sesiones y espacios de trabajo creados por el usuario.

El desinstalador tampoco elimina automáticamente el perfil local. El usuario puede borrar sus datos desde la propia aplicación cuando lo decida.

## Versionado y notas de cada Release

Tutor-IA utiliza versionado semántico `X.Y.Z`:

- `X`: cambios mayores que pueden requerir una migración explicada en las notas;
- `Y`: nuevas funciones compatibles con la versión anterior;
- `Z`: correcciones, seguridad y mejoras de estabilidad.

Cada Release incluye cambios observables para el usuario, correcciones relevantes, requisitos de migración, limitaciones conocidas y hashes verificables. Las notas usan categorías consistentes —**Añadido**, **Corregido**, **Mejorado**, **Cambiado** y **Eliminado**— para que sea fácil identificar el impacto de una versión.

El historial completo y cronológico está en [CHANGELOG.md](CHANGELOG.md). Las Releases de GitHub presentan el resumen de cada entrega y sus archivos descargables; el changelog conserva el detalle acumulado entre versiones. Si una actualización necesita una acción manual, se indicará antes de descargarla.

## Privacidad

- Conversaciones, historial, preferencias, configuración, progreso y memoria permanecen en el equipo.
- GitHub se utiliza únicamente para distribuir el ejecutable y su suma de verificación.
- Tutor-IA no usa este repositorio como servidor ni como almacenamiento personal.
- Las conexiones a Google y proveedores de modelos ocurren únicamente cuando el usuario activa esas funciones.

Consulta [PRIVACIDAD.md](PRIVACIDAD.md) para conocer el límite local-first completo.

## Integridad

Las versiones instalables validan SHA-512 antes de reemplazar archivos y nunca permiten que una instalación firmada descienda a un paquete sin firma. También puedes verificar manualmente el instalador en PowerShell:

```powershell
Get-FileHash .\Tutor-IA-Setup-X.Y.Z.exe -Algorithm SHA256
Get-AuthenticodeSignature .\Tutor-IA-Setup-X.Y.Z.exe
```

El hash debe coincidir exactamente con `release-manifest.json`. El estado Authenticode puede ser `NotSigned` en el canal actual; si el manifiesto declara una versión firmada, el estado debe ser `Valid`. Si alguna comprobación falla, elimina el archivo descargado y no lo ejecutes.

## Recuperación y soporte

Si una actualización se interrumpe, vuelve a abrir Tutor-IA: el sistema comprobará el estado pendiente e intentará recuperar la última instalación válida. Si el problema continúa, descarga nuevamente el instalador de la misma Release y conserva el directorio de datos local. No utilices instaladores compartidos por terceros.

Los problemas de descarga, instalación o integridad pueden reportarse en **Issues** indicando la versión instalada, la versión destino y el mensaje visible, sin adjuntar conversaciones, credenciales ni otros datos personales.
