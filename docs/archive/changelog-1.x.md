# Changelog de Tutor-IA

Este archivo documenta los cambios visibles y relevantes de cada versión pública. Las entradas se ordenan de la más reciente a la más antigua y utilizan categorías consistentes para distinguir funciones nuevas, correcciones, mejoras y cambios de comportamiento.

## 1.2.1

### Añadido

- Añadidos perfiles físicos específicos para escritura progresiva y razonamiento mediante conversión perceptual `duration/bounce`.
- Añadida transformación enlazada desde el indicador de actividad hacia el panel de razonamiento.
- Añadida materialización localizada de la palabra nueva durante el streaming.

### Mejorado

- Unificadas las transiciones del glifo, etiquetas, herramientas, cursor y panel de razonamiento bajo una sola fuente matemática.
- La expansión y contracción del razonamiento comparten una trayectoria reversible y muestreada.
- El contenido se muestra inmediatamente y conserva la agrupación de renders sin introducir un efecto de escritura artificialmente lento.

### Corregido

- Eliminada la aparición brusca de palabras al recibir nuevos fragmentos.
- Evitado que párrafos completos vuelvan a animarse durante cada actualización.
- Eliminadas automáticamente las capas temporales utilizadas para materializar texto.
- Conservados Markdown, código, LaTeX, tablas y visualizaciones durante el streaming.

### Datos y accesibilidad

- Se respetan movimiento reducido, transparencia reducida y contraste aumentado.
- Conversaciones, memoria, selección de modelo, progreso y configuración local se conservan sin migraciones destructivas.

## 1.2.0

### Añadido

- Añadido un sistema de movimiento consciente del origen: cada menú, panel y diálogo nace desde las coordenadas exactas del control que lo activa.
- Añadida una trayectoria geométrica inversa para que cada superficie vuelva al mismo control al cerrarse.
- Añadida interpolación perceptual de resorte con 59 muestras estables y escalado independiente por eje.

### Mejorado

- Coordinadas la expansión, la opacidad, el desenfoque del fondo y la transformación de las esquinas en una única transición continua.
- Unificado el movimiento de menús, submenús, Ajustes, selector de modelos, espacio de aprendizaje y actualizador.
- Mejorada la navegación por teclado y la recuperación de foco al regresar o cerrar una superficie.

### Corregido

- Corregido un estado cancelado de animación que podía causar saltos, parpadeos o cierres duplicados.
- Corregidas carreras de estado al abrir, cerrar, volver o cambiar rápidamente entre opciones.
- Corregida la sincronización de los fondos de diálogo y de las pruebas de interfaz.

### Rendimiento, accesibilidad y datos

- Las trayectorias utilizan transformaciones compuestas y opacidad para evitar recálculos de layout durante cada fotograma.
- Se respetan movimiento reducido, transparencia reducida y contraste aumentado.
- Conversaciones, memoria, progreso, credenciales, selección de modelo y preferencias locales se conservan sin migración destructiva.

## 1.1.10

### Corregido

- Corregida la regla de Firestore que impedía al administrador cargar la consulta global de dispositivos.
- Añadida una recuperación por cuenta para mantener disponible el panel si la consulta global falla temporalmente.
- Evitado que un fallo aislado de dispositivos oculte también el directorio de cuentas.

### Seguridad y compatibilidad

- La consulta global continúa reservada exclusivamente al administrador; los estudiantes solo acceden a su propio registro.
- La regla corregida beneficia también a instalaciones 1.1.9 existentes y la actualización no modifica datos locales.

## 1.1.9

### Añadido

- Añadido control administrativo global para pausar o restaurar el acceso estudiantil en las instalaciones conectadas.
- Añadido directorio protegido de cuentas y dispositivos con actividad, versión del sistema y versión instalada de Tutor-IA.
- Añadidas reglas Firebase que permiten a cada cuenta escribir únicamente su propio registro y reservan la lectura global para el administrador.

### Corregido

- Corregido el panel anterior que se presentaba como multi-dispositivo aunque solo consultaba el archivo del PC local.
- Corregida la posibilidad de continuar indefinidamente con un estado de acceso antiguo cuando el servicio global no está disponible.

### Mejorado

- Mejorada la tolerancia a cortes mediante un caché cifrado breve sin convertirlo en una segunda fuente de verdad.
- Mejorada la presentación de dispositivos agrupados, versión instalada y último acceso dentro de Ajustes.

### Privacidad

- Conversaciones, archivos, memoria, progreso y configuración continúan exclusivamente en el PC.
- El registro remoto excluye IP, seriales de hardware, teléfonos, conversaciones, archivos, comandos, respuestas y credenciales.

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
