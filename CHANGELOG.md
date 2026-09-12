# Cambios de Tutor-IA

Las notas de cada [release](https://github.com/Gy5261/Tutor-IA/releases/latest) describen la versión publicada. Este índice no pretende reconstruir cambios que no estén documentados.

## [4.1.3](https://github.com/Gy5261/Tutor-IA/releases/tag/v4.1.3)

- Interfaz, backend local y pruebas organizados en sus carpetas correspondientes.
- Imports, rutas de recursos y empaquetado actualizados para conservar el funcionamiento de Electron.
- Documentación ampliada por módulo y guías vigentes separadas del archivo histórico.
- Sin cambios funcionales a Google, Firebase, renovación de sesión, funciones en pausa ni política de actualización y firma.

La actualización se distribuye por el canal existente a los clientes conectados durante su siguiente comprobación.

## 4.1.2

Resumen de las notas publicadas:

- Retirados el acceso y los contratos institucionales; Google se mantiene como método de entrada.
- Retirados los restos del modo voz, conservando otras funciones en pausa.
- Mejorada la persistencia de sesión y la protección frente a operaciones tardías durante logout.
- Aislamiento de JavaScript en Chromium, límites de ejecución y cancelación de procesos.
- Comprobación del frame y ventana en IPC.
- Correcciones de IA privada: función seleccionada, proveedores HTTPS públicos, resolución DNS, límites y nueva clave al cambiar de dominio.
- Guardias de divulgación aplicados también a IA privada y respuestas directas.
- Limpieza de recursos visuales y recuperación del worker óptico.
- Actualización de dependencias y ampliación de la validación de autenticación/IA privada.

La publicación conserva el canal de actualización existente. Los equipos la reciben en su siguiente comprobación con conexión.

## Historial anterior

[Changelog original de la línea 1.x](docs/archive/changelog-1.x.md), conservado sin reescribir sus entradas. Sus afirmaciones corresponden al contexto de esas versiones.

El índice anterior terminaba en 1.2.1. No se han inventado entradas para cubrir el intervalo hasta 4.1.2; consulta las notas disponibles de la versión concreta.

## Documentación del repositorio — 2026-09-12

Reorganizadas las guías públicas de instalación, actualización, soporte, privacidad y seguridad. Corregida la referencia SHA-256 para el instalador 4.1.2 publicado. Este cambio documental no sustituye assets ni publica una nueva versión de escritorio.
