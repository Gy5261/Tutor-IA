# Privacidad local-first

Tutor-IA guarda en el equipo del usuario:

- conversaciones e historial;
- borradores y archivos Office procesados;
- proveedor y modelo seleccionados;
- preferencias y configuración;
- progreso, actividad y perfil de aprendizaje;
- memoria contextual derivada;
- espacios de trabajo y exportaciones privadas.

Las conversaciones, archivos, progreso, memoria y configuración no se guardan en un servidor propio. La eliminación de esos datos se realiza desde las opciones locales de la aplicación y afecta únicamente el perfil del dispositivo.

Para administrar el acceso global, Tutor-IA registra en Firebase únicamente el correo y nombre de la cuenta autenticada, las fechas y cantidad de accesos, el nombre del equipo, versión de Windows, arquitectura y versión instalada de la aplicación. No se recopilan seriales de hardware, contenido de conversaciones, archivos, comandos ni respuestas de la IA. Las reglas de Firebase permiten que cada cuenta escriba exclusivamente su propio registro; solo el correo administrador autorizado puede consultar el directorio completo o pausar el acceso estudiantil.

Cuando la verificación global no está disponible, la aplicación utiliza durante un periodo breve el último estado cifrado confirmado en el PC. Después de ese periodo bloquea el acceso estudiantil hasta recuperar la conexión, evitando ignorar una pausa administrativa.

Las conexiones a Google y a proveedores Cloud son funciones solicitadas por el usuario. Los tokens de Google se cifran con el almacenamiento seguro de Windows, mientras que la configuración del proveedor permanece aislada en el perfil local de Electron.
