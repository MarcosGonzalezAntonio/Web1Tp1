# S2_UserStory #6: Productos Sugeridos en Inicio
**Código:** `#main-s2-us6`
**Nombre:** Mostrar productos sugeridos en Inicio

## 🌐 Contexto
La página de inicio deja de ser una colección estática de imágenes para convertirse en una vitrina dinámica. Ahora, los productos mostrados provendrán de nuestra "base de datos" (el archivo JSON), permitiendo que cualquier cambio en los datos se refleje automáticamente en la Home.

## 🧠 Lógica de Negocio
El controlador de la página principal debe leer el archivo JSON de productos y seleccionar un subconjunto para mostrar.
- **Fuente:** `products.json`.
- **Selección:** Array de longitud fija (5 elementos).
- **Fallback:** Implementar lógica para mostrar una imagen por defecto si el producto no tiene una asociada.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Servicio de Datos:** Crea un módulo que lea el JSON y devuelva un array de objetos.
2. **Controlador Home:** Importa el servicio y usa un método para obtener los primeros 5 productos (o 5 aleatorios para el BONUS).
3. **Partial de Producto:** Crea `src/views/partials/card.ejs` para encapsular el diseño de la tarjeta de producto y reutilizarlo aquí.
4. **Renderizado:** Pasa el array de 5 productos a la vista `index.ejs` y usa un bucle (`foreach`) para renderizar las cards.

## ✅ Criterios de Validación (Texto Original)
- Se muestran hasta 5 productos en la sección “Te puede interesar”.
- Cada producto muestra: imagen, nombre, precio, link a /products/:id.
- ✨BONUS: Si un producto no tiene imagen, se muestra una imagen de fallback.
- No se usa API, fetch ni base de datos.
- La Home debe leer los productos desde products.json (o módulo JS).
