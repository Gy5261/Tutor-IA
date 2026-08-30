# Privacidad local-first

Tutor-IA guarda en el equipo del usuario:

- conversaciones e historial;
- borradores y archivos Office procesados;
- proveedor y modelo seleccionados;
- preferencias y configuración;
- progreso, actividad y perfil de aprendizaje;
- memoria contextual derivada;
- espacios de trabajo y exportaciones privadas.

La aplicación no usa GitHub ni un backend propio como almacén de datos personales. La eliminación de datos se realiza desde las opciones locales de la aplicación y afecta únicamente el perfil del dispositivo.

Las conexiones a Google y a proveedores Cloud son funciones solicitadas por el usuario. Los tokens de Google se cifran con el almacenamiento seguro de Windows, mientras que la configuración del proveedor permanece aislada en el perfil local de Electron.
