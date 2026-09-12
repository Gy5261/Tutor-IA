# Seguridad

## Distribución e integridad

Descarga el instalador desde las [Releases oficiales](https://github.com/Gy5261/Tutor-IA/releases/latest). Una release actualizable incluye `.exe`, `.blockmap`, `latest.yml` y `release-manifest.json`.

Compara el SHA-256 del instalador con el manifiesto de **esa misma versión**. El tamaño y SHA-512 también están registrados. [Instrucciones de verificación](docs/actualizaciones.md).

El manifiesto publicado de **4.1.3 declara `NotSigned`**. El canal actual no exige certificado Authenticode; no debe describirse este instalador como firmado. Los hashes comprueban integridad respecto al manifiesto, pero no sustituyen una firma del editor. Esta documentación no cambia la política del actualizador ni indica que se desactiven protecciones de Windows.

## Reportar una vulnerabilidad

Los Issues de este repositorio son públicos y el reporte privado de vulnerabilidades de GitHub no está habilitado en la revisión del 12 de septiembre de 2026.

No publiques detalles de explotación, credenciales ni información personal. Utiliza un canal privado ya establecido con el responsable del proyecto; si no dispones de uno, abre una incidencia general solicitando un canal de contacto, sin incluir el contenido sensible.

Para errores funcionales sin información sensible, sigue la [guía de soporte](docs/soporte.md).

## Información que no debe adjuntarse

Claves API, tokens, archivos de sesión, perfiles de usuario, conversaciones, documentos privados y datos de estudiantes. Revisa y oculta esa información antes de compartir una captura.

[Volver al inicio](README.md)
