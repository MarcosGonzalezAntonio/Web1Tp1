## Resolución User Story #5

***Código:** #main-s1-us5*

***Nombre:** Construir página de inicio*

### **Detalle de la Implementación**

Se ha construido la página de Inicio (Home) cumpliendo con todos los requerimientos estipulados para la pantalla principal accesible desde `/`. Adicionalmente, se completaron exitosamente los dos requerimientos de la sección **BONUS** (Menú de Categorías y Hero Section), implementando un diseño Premium y responsivo.

- **Estructura y Maquetado (`index.ejs`):**
  - Se usaron etiquetas semánticas de HTML5 (`<main>`, `<section>`, `<article>`) para organizar la información.
  - Se modularizó la vista inyectando componentes (`partials`) como el encabezado, el menú de categorías (renderizado arriba y abajo), y las tarjetas de productos.
  - Se agregó una sección destacada (ProductHero) conformada por 2 tarjetas que usan imágenes de fondo oscurecidas para contrastar el texto.

- **Componentes (`partials`):**
  - **`header.ejs`:** Contiene la marca "Vimet Store", una barra de búsqueda funcional a nivel UI y los enlaces de navegación, todo adaptado visualmente.
  - **`categoryMenu.ejs`:** Componente de tipo molécula que renderiza un listado horizontal con las 8 categorías solicitadas (*Electrónica, Alimentos, Bebidas, Indumentaria, Juegos, Automotor, Hogar, Otros*). Este menú se renderiza justo por debajo del encabezado y antes del pie de página.
  - **`productCard.ejs`:** Las tarjetas de productos fueron convertidas en elementos interactivos que al hacer click redirigen al producto en detalle (`/product`). Además, expresan su precio dinámico en puntos (ej. "1500 pts").
  - **`footer.ejs`:** Ajustado para mantener la consistencia con el diseño moderno propuesto en todo el sitio.

- **Diseño Premium y Responsivo (`styles.css`):**
  - Se creó una hoja de estilo moderna, implementando un sistema de variables CSS, uso extenso de sombras (`box-shadow`), y tipografía Google Fonts (`Inter`).
  - Layout construido en base a **CSS Grid** y **Flexbox** asegurando una vista impecable tanto en dispositivos móviles (mobile-first) como en pantallas de escritorio.
  - Usabilidad y accesibilidad: Se definieron claramente los atributos `aria-label`, y efectos de `:hover` en botones, categorías y tarjetas (animando transformaciones sutiles) garantizando feedback visual y cursor de puntero claro en todos los enlaces.

- **Interactividad Base (`main.js`):**
  - Lógica incorporada para escuchar el click o la pulsación de la tecla "Enter" en la barra de búsqueda y disparar una alerta simulando la acción.
