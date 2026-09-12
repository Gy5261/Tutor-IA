# Tutor-IA

Asistente educativo para Windows con conversaciones de IA, apoyo al aprendizaje, análisis de documentos y herramientas integradas.

Este es el repositorio público de **distribución, documentación y soporte**. El código de la aplicación se mantiene en un repositorio privado; clonar este repositorio no instala Tutor-IA.

[Descargar Tutor-IA](https://github.com/Gy5261/Tutor-IA/releases/latest) · [Documentación](docs/README.md) · [Cambios](CHANGELOG.md) · [Reportar un problema](https://github.com/Gy5261/Tutor-IA/issues/new) · [Privacidad](PRIVACIDAD.md)

## Empezar

1. Abre la [última versión estable](https://github.com/Gy5261/Tutor-IA/releases/latest).
2. Descarga el archivo **Tutor-IA-Setup-…exe** de sus assets y ejecuta el instalador.
3. Abre Tutor-IA e inicia sesión con Google.

El instalador publicado es para **Windows x64**. Se necesita conexión para autenticación, IA remota y actualizaciones. Las funciones disponibles dependen del acceso de la cuenta y de la configuración administrativa; descargar el programa no concede automáticamente acceso a todos los modelos.

Los archivos “Source code (zip/tar.gz)” que GitHub muestra en Releases son copias de este repositorio de documentación, no el instalador ni el código privado de la aplicación.

[Guía de instalación](docs/instalacion.md) · [Solución de problemas](docs/soporte.md)

## Qué puedes hacer

| Área | Funciones |
| --- | --- |
| Conversación | Consultas educativas y de programación, respuestas progresivas y contenido estructurado |
| Documentos | Adjuntos, análisis de contenido y exportación de conversaciones |
| Aprendizaje | Actividades, seguimiento y memoria del perfil local |
| Colaboración | Conversaciones compartidas, invitaciones y comentarios |
| Herramientas | Análisis web, PowerShell protegido y ejecución JavaScript aislada |
| Administración | Gestión de acceso, estudiantes, cohortes, uso y configuración de IA privada para roles autorizados |

La versión vigente usa Google para iniciar sesión. El acceso institucional y el modo voz fueron retirados en 4.1.2. Los componentes ocultos o en pausa no se presentan como funciones disponibles.

## Actualizaciones

La edición instalada consulta este mismo canal para obtener nuevas versiones. Los clientes reciben las actualizaciones cuando están conectados y realizan su comprobación; una publicación no significa que todos los equipos ya estén actualizados.

Cada release actualizable incluye instalador, `.blockmap`, `latest.yml` y `release-manifest.json`. Para instalar manualmente, solo necesitas el `.exe`; los demás archivos permiten la actualización y verificación.

[Cómo actualizar y verificar](docs/actualizaciones.md) · [Notas de versión](CHANGELOG.md)

## Documentación

| Guía | Contenido |
| --- | --- |
| [Instalación](docs/instalacion.md) | Descarga, primer acceso y versiones portable |
| [Actualizaciones](docs/actualizaciones.md) | Canal, artefactos, integridad y recuperación |
| [Soporte](docs/soporte.md) | Problemas de acceso, IA, descarga y datos para reportarlos |
| [Privacidad](PRIVACIDAD.md) | Almacenamiento local y servicios que procesan datos |
| [Seguridad](SECURITY.md) | Procedencia, firma y reporte de vulnerabilidades |
| [Cambios](CHANGELOG.md) | Versión reciente e historial conservado |

## Reportar problemas

Utiliza [Issues](https://github.com/Gy5261/Tutor-IA/issues/new) para errores de instalación o funcionamiento. Incluye versión de Tutor-IA, versión de Windows, pasos para reproducir y el mensaje visible.

No adjuntes claves, tokens, conversaciones ni datos de estudiantes. Para vulnerabilidades, consulta [SECURITY.md](SECURITY.md) antes de publicar detalles.

## Datos y privacidad

Tutor-IA combina almacenamiento local con Google, Firebase, Supabase y proveedores de IA. Los mensajes utilizados para responder se envían al servicio de IA; compartir una conversación también implica almacenamiento remoto.

No se promete que todos los datos permanezcan exclusivamente en el equipo ni que todo el historial local esté cifrado. Consulta [PRIVACIDAD.md](PRIVACIDAD.md) para conocer los límites de cada flujo.

## Organización del repositorio

```text
README.md          Presentación y primeros pasos
CHANGELOG.md       Cambios recientes e índice histórico
PRIVACIDAD.md      Tratamiento de datos de la aplicación
SECURITY.md        Integridad y reporte de vulnerabilidades
checksums.txt      SHA-256 de la versión indicada en el archivo
docs/              Guías de uso y archivo histórico
```

Los ejecutables se distribuyen en **Releases**, no como archivos del árbol de código. El manifiesto de cada release es la referencia para verificar su instalador.
