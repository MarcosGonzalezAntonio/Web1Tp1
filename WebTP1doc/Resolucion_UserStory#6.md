## Resolución User Story #6

***Código:** #main-s1-us6*

***Nombre:** Construir página de producto*

### **Detalle de la Implementación**

Se ha construido la página de Detalles del Producto/Servicio accesible de forma dinámica desde la ruta `/product` y `/product/:id`, cumpliendo tanto con los requisitos obligatorios como con los cuatro escenarios extra de la sección **BONUS**.

- **Estructura y Maquetado:**
  - **`product.ejs`:** Se creó la plantilla para mostrar los detalles completos de un producto utilizando HTML5 semántico (`<main>`, `<section>`). Destaca visualmente el nombre, la imagen principal, una descripción clara, y el precio expresado en *puntos*. Contiene el botón interactivo para "Añadir al carrito".
  - **`productNotFound.ejs` (BONUS):** Nueva vista diseñada específicamente para retener al usuario cuando intente acceder a un ID inexistente (por ejemplo, `/product/999`), evitando un error de servidor genérico.
  - En ambas vistas, se importaron e implementaron los módulos ya construidos (Header, Footer y Menú de Categorías).

- **Lógica de Ruteo Simulada (`app.js`):**
  - Se modificó el Endpoint para que acepte un parámetro opcional `/product/:id?`.
  - Se desarrolló un array con "mock products" para poder simular la validación de si un producto existe o no.
  - **Sugerencias ante error (BONUS):** Si el ID no existe, se retorna un estado HTTP 404 y se renderiza `productNotFound.ejs` pasándole un arreglo de productos *aleatorios* para atrapar la atención de la persona y que no abandone la web.
  - **Productos Similares (BONUS):** En el detalle de un producto exitoso, se ejecuta un filtro que busca otros productos que compartan su misma categoría y se renderizan debajo a modo de sugerencia.
  - **Cross-Selling (BONUS):** Se inyectó el componente `categoryMenu.ejs` en todas las páginas de esta Story, al igual que en la página principal, para seguir incentivando compras múltiples.

- **Diseño Premium y Escalable (`product.css`):**
  - Se diseñaron estilos exclusivos en un archivo `product.css` (importado en el `styles.css` maestro) garantizando mantener limpia la hoja principal.
  - Uso de **CSS Grid** para organizar la foto y descripción lado a lado de forma moderna, y adaptándolo vía *Media Queries* para dispositivos móviles.
  - Consistencia estética premium mediante las variables CSS globales (`--primary-color`, `box-shadow`, etc.) y suaves transiciones `hover` en las fotos.
