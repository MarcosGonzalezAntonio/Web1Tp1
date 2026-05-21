## Resolución User Story #4

***Código:** #main-s1-us4*

***Nombre:** Construir página de inicio de sesión*

### **Detalle de la Implementación**

Se ha construido la vista de la página de inicio de sesión cumpliendo con todos los requerimientos estipulados de estructura, navegación y buenas prácticas de accesibilidad.

- **Formulario de Inicio de Sesión:**
  - Se modificó el archivo `views/pages/login.ejs`.
  - Se adaptaron los campos para solicitar: Nombre de usuario (tipo `text`) y Contraseña (tipo `password`).
  - Se incorporaron etiquetas `<label>` debidamente vinculadas con sus respectivos campos mediante el atributo `for`, optimizando la accesibilidad semántica.
  - El botón de envío fue actualizado con la leyenda exacta "Iniciar Sesión" (utilizando la etiqueta `<button type="submit">` para asegurar el envío del formulario nativo).
  - Los campos de ingreso se organizaron estructuradamente dentro de contenedores `<div class="form-group">`.
  - Se incorporaron atributos `autocomplete` (`username` y `current-password`) para mejorar la usabilidad.

- **Enlaces de Navegación:**
  - Se añadió un enlace que dirige hacia la página de registro (`/register`) para los usuarios que no poseen credenciales.
  - Se agregó un enlace secundario que permite al usuario retornar rápidamente a la página de inicio (`/`).

- **Estructura y Consistencia:**
  - Se incluyeron y respetaron los partials predefinidos para la cabecera (`header`) y el pie de página (`footer`), garantizando de esta manera la consistencia visual y el diseño atómico establecido en el proyecto.
