## Resolución User Story #3

***Código:** #main-s1-us3*

***Nombre:** Construir página de registro*

### **Detalle de la Implementación**

Se ha construido la vista de la página de registro cumpliendo con todos los requerimientos estipulados y asegurando el uso de HTML semántico y buenas prácticas de accesibilidad.

- **Formulario de Registro:**
  - Se modificó el archivo `views/pages/register.ejs`.
  - Se agregaron los campos solicitados: Nombre (tipo texto), Email (tipo email) y Contraseña (tipo password).
  - Cada input cuenta con su respectiva etiqueta `<label>` enlazada mediante el atributo `for`, mejorando la accesibilidad y usabilidad.
  - Se configuró el botón de envío con la leyenda "Registrarse".
  - Se agruparon los elementos del formulario utilizando divisores semánticos (`<div class="form-group">`).
  - Se incluyeron los atributos `autocomplete` correspondientes a cada campo para facilitar el autocompletado en navegadores modernos.

- **Enlaces de Navegación:**
  - **¡BONUS COMPLETADO!** Se incluyó un enlace para redirigir a los usuarios que ya tienen cuenta hacia la página de inicio de sesión (`/login`).
  - Se agregó un enlace que permite al usuario regresar rápidamente a la página de inicio (`/`).

- **Estructura y Consistencia:**
  - Se mantuvieron los partials previamente definidos (`header` y `footer`), conservando así la estructura visual de la aplicación.
