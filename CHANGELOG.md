# Changelog de Tutor-IA

Este archivo documenta los cambios visibles y relevantes de cada versión pública. Las entradas se ordenan de la más reciente a la más antigua y utilizan categorías consistentes para distinguir funciones nuevas, correcciones, mejoras y cambios de comportamiento.

## 1.1.1

### Corregido

- Eliminado el riel de desplazamiento nativo de Windows/Chromium que aparecía como una barra lateral blanca con flechas dentro de Ajustes y otras superficies principales.
- Eliminado el espacio lateral reservado por ese riel en conversaciones largas.

### Mejorado

- El desplazamiento continúa funcionando mediante rueda, touchpad, teclado y gestos táctiles, sin introducir controles visuales adicionales.
- Unificado el comportamiento en Ajustes, selector de modelos, conversación, espacio de aprendizaje y desplegables internos.

## 1.1.0

### Añadido

- Añadido un actualizador integrado que comprueba nuevas versiones, muestra notas, descarga en segundo plano y solicita reiniciar solo cuando la instalación está preparada.
- Añadida distribución NSIS con `latest.yml`, paquete diferencial `.blockmap` y `release-manifest.json` para validar versión, tamaño, SHA-512 y SHA-256.
- Añadida recuperación de la versión anterior cuando el primer arranque actualizado no completa la comprobación de salud.
- Añadidos perfiles locales aislados por correo, autenticación con Google y persistencia de conversaciones, preferencias, memoria y progreso académico.
- Añadida selección explícita de proveedor y modelo Cloud; el modelo visible en la interfaz es el mismo que recibe cada solicitud.
- Añadidos adjuntos Office, renderizado estructurado de código y LaTeX, búsqueda web asistida por Python y ejecución protegida de PowerShell.

### Corregido

- Corregida la posibilidad de cambiar silenciosamente a otro modelo cuando el modelo elegido deja de estar disponible; ahora Tutor-IA solicita una nueva selección.
- Corregida la mezcla visual de código, resultados web, llamadas de herramientas y texto conversacional durante respuestas progresivas.
- Corregido el manejo de UTF-8, caracteres especiales y salida estructurada en PowerShell.
- Corregida la persistencia duplicada entre la interfaz, la configuración y el runtime mediante una única selección de modelo por perfil.
- Corregida la eliminación accidental de datos locales durante reinstalaciones y desinstalaciones del programa.

### Mejorado

- Mejorada la interfaz clara en verde y blanco, con navegación, ajustes, selector de modelos y espacio de aprendizaje unificados.
- Mejorados los estados de razonamiento, búsqueda y uso de herramientas para mostrar actividad comprensible sin exponer JSON ni parámetros internos.
- Mejorados el rendimiento de animaciones, el streaming de respuestas largas y la estabilidad de menús y submenús.
- Mejorados el análisis del estudiante, el seguimiento del progreso y el contexto pedagógico almacenado localmente.

### Cambiado

- Cambiado el almacenamiento a un enfoque local-first: GitHub distribuye versiones, pero no almacena conversaciones ni perfiles personales.
- Cambiado el acceso a la aplicación para requerir una sesión identificada antes de cargar la memoria del perfil.
- Cambiado el canal inicial de actualización a paquetes `NotSigned` verificados mediante hashes. Una instalación firmada futura nunca podrá descender a un paquete sin firma.

### Eliminado

- Eliminados el modo de voz en vivo, la transcripción y sus controles relacionados.
- Eliminadas las rutas de modelos locales y los cambios silenciosos entre proveedores.

### Migración desde 1.0.0

La versión `1.0.0` es portable y no puede instalar esta actualización automáticamente. Descarga y ejecuta `Tutor-IA-Setup-1.1.0.exe` una sola vez. Las conversaciones, preferencias y demás datos locales se conservan. A partir de `1.1.0`, Tutor-IA puede recibir versiones posteriores desde el actualizador integrado.

### Limitaciones conocidas

- El instalador `1.1.0` no tiene firma Authenticode, por lo que Windows puede mostrar SmartScreen. Verifica el SHA-256 publicado en la Release antes de continuar.
- El inicio de sesión y los modelos Cloud requieren conexión a internet y credenciales válidas del proveedor correspondiente.

## 1.0.0

### Añadido

- Publicada la primera versión portable de Tutor-IA para Windows.
- Incluidas la experiencia educativa inicial, memoria local-first, herramientas de aprendizaje y configuración de modelos Cloud.

### Cambiado

- Esta edición se conserva como punto de migración histórico. Para recibir actualizaciones automáticas, instala manualmente `1.1.0` o una versión posterior.
