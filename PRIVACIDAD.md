# Privacidad y tratamiento de datos

Esta guía describe los flujos implementados en Tutor-IA 4.1.2, revisados el 12 de septiembre de 2026. Sustituye la descripción anterior que afirmaba que no existía almacenamiento remoto de contenido.

## Almacenamiento local

El perfil local conserva conversaciones, preferencias, memoria contextual y estado de aprendizaje mediante el almacenamiento del renderer. También existen directorios para workspaces, exportaciones, estado administrativo, métricas y recuperación de actualizaciones.

Las credenciales de Google y de la sesión de plataforma utilizan el almacenamiento seguro nativo de Electron. Esto **no significa que todo el historial local esté cifrado con ese mecanismo**. El componente de persistencia cifrada presente en el código no está conectado al historial completo del arranque actual.

## Servicios remotos

| Servicio | Qué procesa o conserva |
| --- | --- |
| Google / Firebase Identity | Identidad, inicio de sesión y validación de la cuenta |
| Firestore | Control global e individual de acceso, registros de cuenta/dispositivo, resúmenes educativos, sesiones reflejadas, compartidos y comentarios |
| Supabase | Cuentas, sesiones, aprobaciones, estudiantes/cohortes, configuración privada de IA, cuotas y registros de uso/auditoría |
| Proveedores de IA | Mensajes y contexto enviados para generar respuestas, incluido contenido de adjuntos cuando se utiliza |
| Servicios de análisis web | Consultas y solicitudes de páginas realizadas por la herramienta |
| Servicios de correo | Destinatarios y contenido de invitaciones/notificaciones cuando se envían |
| GitHub | Solicitudes de descarga y actualización, y cualquier contenido que el usuario publique en Issues |

El historial local y una conversación compartida tienen destinos distintos. No debe interpretarse “local-first” como ausencia de conexiones remotas.

## Acceso y credenciales

Los permisos se comprueban en la aplicación y los servicios remotos. Una cuenta ordinaria no obtiene permisos administrativos por acceder al repositorio público.

Las claves de proveedores de IA privada se almacenan cifradas en el backend y no se devuelven al renderer como parte de la configuración pública. La autenticación puede renovarse automáticamente, por lo que las conexiones de sesión no requieren pulsar un botón en cada ocasión.

## Conservación y eliminación

Actualizar el programa no está diseñado para borrar el perfil local. El instalador está configurado para conservar los datos de aplicación al desinstalar.

Borrar datos locales no equivale a borrar registros remotos, compartidos, comentarios o auditoría. Para una solicitud sobre datos administrados por la plataforma, contacta al responsable de tu acceso mediante el canal privado que ya utilices. No publiques la solicitud con información personal en Issues.

Esta documentación no establece un plazo único de retención para todos los servicios ni garantiza una política de entrenamiento de terceros. No se deben atribuir esas garantías al producto sin verificar las condiciones del proveedor y su configuración.

[Volver al inicio](README.md)
