## Resolución User Story #7

***Código:** #main-s1-us7*

***Nombre:** Construir página de carrito*

### **Detalle de la Implementación**

Se construyó exitosamente la página del carrito de compras accesible desde la ruta `/cart`, proveyendo de una interfaz donde el usuario puede gestionar interactivamente los productos que desea adquirir, y además, se implementó completamente el **BONUS** del cupón de descuento.

- **Estructura y Maquetado (`cart.ejs`):**
  - **Layout Principal:** Se empleó una maqueta estructurada mediante CSS Grid. A la izquierda, el listado de productos seleccionados. A la derecha, un panel de "Resumen de Compra".
  - **Elementos del Ítem:** Cada fila de producto expone su imagen, título, controlador numérico de cantidad (con botones ➖ y ➕), y el monto total para ese renglón, todo expresado en *puntos*.
  - **Módulos Generales:** Se mantuvieron integrados los parciales `header.ejs` (Logo, búsqueda y título) y el `footer.ejs`.
  - **Navegación Intuitiva:** Se proveyeron dos botones de acción principal en el resumen: "Ir a Pagar" (enlazado a `/checkout`) y "Volver al listado" (enlazado a `/`).

- **Interactividad Dinámica (`cart.js`):**
  - **Actualización de Cantidades:** Se programó lógica en JS puro para escuchar los clicks en los botones de "Más" y "Menos". La UI actualiza la cantidad individual y recalcula en tiempo real el costo de ese producto, el subtotal y el total global del carrito.
  - **Remoción Inteligente:** Si el usuario reduce la cantidad y esta cae por debajo de 1, aparece un aviso pidiendo confirmación para quitar el elemento de su lista.
  - **Cupón de Descuento (BONUS):** Se agregó un campo de texto en el resumen. Posee validación para solo aceptar caracteres alfanuméricos (`pattern="[a-zA-Z0-9]+"` y validación regex en JS). A modo de prueba funcional, si se aplica el código `VIMET20`, el JS inyecta dinámicamente una nueva fila en el resumen indicando el ahorro (-20%) y re-calcula el total final.

- **Diseño Premium y Responsive (`cart.css`):**
  - El código visual de esta sección fue aislado en su propio módulo importable (`cart.css`).
  - **Panel Sticky:** En vista de escritorio, el "Resumen de compra" tiene una posición "pegajosa" (`position: sticky`), de manera que acompañará al usuario al hacer *scroll* si el carrito es muy extenso.
  - **Mobile-First:** Las tarjetas de producto en celular adoptan un formato más compacto y el resumen se acomoda abajo de la lista, logrando que el sitio sea perfectamente accesible sin importar el tamaño de pantalla. Usando la fuente 'Inter', un esquema de colores estricto y botones con sutiles *hover effects*.
