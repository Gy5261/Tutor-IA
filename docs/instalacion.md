# Instalación y primer acceso

## Antes de instalar

La release 4.1.2 publica un instalador Windows x64. Las operaciones de Google, IA remota, colaboración y actualización requieren conexión. El acceso a IA depende de la cuenta y la configuración administrativa.

Este repositorio no fija una cantidad mínima de RAM o disco comprobada para todas las cargas. No se ofrece aquí un instalador macOS/Linux ni una instalación mediante npm o winget.

## Instalar

1. Abre [Releases / Latest](https://github.com/Gy5261/Tutor-IA/releases/latest).
2. En Assets, descarga `Tutor-IA-Setup-<versión>.exe`.
3. Si necesitas comprobar el archivo, descarga también `release-manifest.json` y sigue la [verificación](actualizaciones.md#verificar-una-descarga).
4. Ejecuta el instalador y abre Tutor-IA.
5. Inicia sesión con Google.

No descargues “Source code” para instalar. No uses el repositorio como proyecto npm: contiene documentación y distribución, no las fuentes de la aplicación.

El estado de firma se declara en el manifiesto. La versión 4.1.2 está publicada sin firma Authenticode; consulta [seguridad](../SECURITY.md) y no desactives las protecciones del equipo como paso de instalación.

## Acceso a la IA

Iniciar sesión no concede por sí solo todas las funciones. El administrador determina permisos, proveedores, modelos y límites. Si puedes entrar pero no conversar, revisa el mensaje visible y contacta al responsable de tu acceso.

La versión vigente no utiliza ID institucional ni ofrece modo voz. No sigas instrucciones antiguas que soliciten esos pasos.

## Si tienes una versión portable

La política del actualizador distingue portable e instalador NSIS. Para pasar al canal instalable, descarga el instalador estable desde Releases. Conserva el perfil local; no borres carpetas de datos como paso de migración.

## Desinstalar

Utiliza la desinstalación normal de Windows. La configuración del instalador conserva los datos locales al desinstalar; no equivale a borrar información en servicios remotos. Consulta [privacidad](../PRIVACIDAD.md).

[Volver a documentación](README.md)
