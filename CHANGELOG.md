# Cambios

## [6.1.11](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.11)

- Límite de salida de 8192 tokens en las rutas y asignaciones existentes.
- Corregido el parámetro de respuesta de Ollama.
- Se conservan los proveedores y modelos configurados.

En Ollama cloud, el modelo GPT-OSS 120B dispone de una ventana de 128K tokens. Su API compatible con OpenAI no permite fijar `num_ctx` por petición.

## [6.1.10](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.10)

- Lectura por páginas y búsqueda en archivos de texto grandes.
- Cambios en carpetas elegidas con aprobación por operación y recuperación.
- Elevación puntual confirmada mediante UAC, sin administración general del equipo.
- Tarjetas de actividad de archivos más claras y adaptables.

## [6.1.9](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.9)

- Lectura del equipo con confirmación explícita, separada del proyecto aislado.
- Permiso revocable por conversación y sesión; sin escritura ni ejecución en el equipo.
- Información clara sobre el envío de nombres y textos consultados al proveedor de IA.

## [6.1.8](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.8)

- Búsqueda web con alternativas ante resultados insuficientes.
- Pausas cuando un proveedor limita el acceso.
- Resultados parciales reutilizados sin ocultar sus limitaciones.
- Páginas de verificación excluidas como evidencia.

Se mantiene el intervalo mínimo de diez segundos entre búsquedas nuevas. No se eluden CAPTCHA ni accesos restringidos.

## Versiones recientes

| Versión | Cambio principal |
| --- | --- |
| [6.1.7](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.7) | Búsqueda multicapa y recuperación de conexión |
| [6.1.6](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.6) | Corrección del cierre de opciones |
| [6.1.5](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.5) | Permisos del proyecto y eliminación del editor visual |
| [6.1.4](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.4) | Tarjetas administrativas sin desbordamientos |
| [6.1.3](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.3) | Herramientas de programación y notificaciones |
| [6.1.2](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.2) | Animaciones y lectura más estables |
| [6.1.1](https://github.com/Gy5261/Tutor-IA/releases/tag/v6.1.1) | Retirada de autorouting |

[Releases anteriores](https://github.com/Gy5261/Tutor-IA/releases) · [Resumen histórico](docs/archive/README.md)

Las notas antiguas describen su versión, no las funciones actuales. Esta revisión documental no cambia instaladores ni datos.
