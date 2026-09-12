# Soporte y solución de problemas

## Comprobaciones habituales

| Problema | Qué revisar |
| --- | --- |
| Descargué un ZIP y no encuentro el programa | Usa el asset `.exe`; “Source code” contiene este repositorio |
| No puedo iniciar sesión | Conexión, cuenta Google utilizada y mensaje exacto; el acceso institucional ya no aplica |
| Entro, pero la IA no responde o muestra acceso denegado | Permiso de cuenta, estado de IA, cuota y proveedor configurados por el administrador |
| Un proveedor no acepta su URL | La IA privada requiere HTTPS público y protocolo compatible con Chat Completions; no cualquier URL o protocolo funciona |
| No aparece una actualización | Comprueba versión instalada, conexión y si utilizas instalador o portable |
| La descarga está dañada | Compara tamaño/hash con el manifiesto de esa release |
| Windows muestra información de firma | Consulta el estado del manifiesto; 4.1.5 declara `NotSigned` |
| Falló una herramienta | Conserva el error y los pasos; no amplíes permisos ni desactives guardias para ocultarlo |

## Reportar un error

Abre una [incidencia](https://github.com/Gy5261/Tutor-IA/issues/new) con:

- Versión de Tutor-IA y versión de Windows.
- Instalador o portable.
- Pasos para reproducir.
- Resultado esperado y resultado observado.
- Mensaje exacto, sin credenciales ni datos personales.

Las capturas son opcionales: oculta correos, nombres de estudiantes, conversaciones y claves. No adjuntes perfiles, bases de datos ni archivos de sesión.

## Acceso de cuentas y vulnerabilidades

Los cambios de permisos o solicitudes sobre datos deben tratarse con el responsable de tu acceso por un canal privado. Issues es público y no debe usarse para publicar datos de una cuenta.

Para vulnerabilidades, sigue [SECURITY.md](../SECURITY.md). No se promete un plazo de respuesta que no esté establecido.

[Volver a documentación](README.md)
