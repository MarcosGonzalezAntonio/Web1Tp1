## Resolución User Story #8

***Código:** #main-s1-us8*

***Nombre:** Definir enlaces y esquema de navegación*

### **Detalle de la Implementación**

Se ha configurado el árbol de navegación completo (*navigation tree*), garantizando que las interconexiones lógicas entre las distintas páginas operen de acuerdo a los escenarios requeridos por el equipo, abarcando también el escenario **BONUS** solicitado.

- **Modificaciones Globales de Navegación (`header.ejs`):**
  - Se actualizaron los enlaces del menú superior. Ahora, además de contar con el atajo rápido al "Carrito" (que apunta directamente a `/cart`), se incluyeron los botones explícitos de "Ingresar" (`/login`) y "Registrarse" (`/register`). Al estar en el header, estos accesos están garantizados desde Home, Producto, Carrito, etc.

- **Pantallas de Autenticación (`login.ejs` y `register.ejs`):**
  - **Redirecciones Base (Flujo "Ok"):** Se ajustó el compartamiento de los formularios estableciendo su `action` hacia la raíz (`/`) a través del método GET. De esta manera, al rellenar los datos y presionar el botón de submit ("Ingresar (Ok)" o "Registrarme (Ok)"), el sistema redirige automáticamente al usuario de regreso a la página de Inicio 🏠.
  - **Enlaces Cruzados (BONUS):** Para que las vistas no sean "callejones sin salida", se incluyeron atajos cruzados. 
    - Desde la página de Login se integró el botón para derivar al Registro.
    - Desde la página de Registro se integró el botón para derivar al Login **(Cumpliendo con el BONUS)**.

- **Resto de las Rutas Definidas:**
  - **Home a Producto:** Todas las tarjetas de producto en el listado tienen programado su evento interactivo para enviar a la persona a la vista detallada (`/product/:id`).
  - **Carrito a Checkout:** Dentro de `/cart`, el botón principal "Ir a Pagar" direcciona sin inconvenientes a `/checkout` para continuar el flujo de cobro.

- **Estética Consistente (`auth.css`):**
  - En paralelo a los cambios estructurales, se diseñó la interfaz gráfica de ambos formularios de autenticación creando un módulo estético (`auth.css`). El layout exhibe los campos centrados tipo *Card*, un separador visual moderno, tipografías limpias y estados de `:focus` elegantes sobre los inputs.
