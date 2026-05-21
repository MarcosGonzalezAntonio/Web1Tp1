# S2_UserStory #10: Categorías
**Código:** `#main-s2-us10`
**Nombre:** Listado de productos por categoría

## 🌐 Contexto
Para mejorar la navegabilidad, implementaremos un sistema de filtrado dinámico. Los usuarios podrán ver colecciones específicas de productos (ej. "Electrónica", "Indumentaria") accediendo a una ruta única que filtra el catálogo en tiempo real.

## 🧠 Lógica de Negocio
Usaremos parámetros de ruta para la categoría. El servidor filtrará el JSON completo y devolverá solo los ítems coincidentes.
- Ruta: `/categories/:category`.
- Lógica: `products.filter(p => p.category === req.params.category)`.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Ruta de Categoría:** Define el endpoint en `productRoute.js`.
2. **Controlador:** Implementa una función `listByCategory` que obtenga el parámetro, realice el filtro y cuente los resultados.
3. **Vista de Listado:** Reutiliza la lógica de la página de productos (grilla de cards) para mostrar los resultados.
4. **Manejo de Vacíos:** Si no hay productos en esa categoría, muestra un mensaje descriptivo y un botón para explorar otras categorías.

## ✅ Criterios de Validación (Texto Original)
- La persona accede a /categories/:category.
- La app filtra los productos del JSON por categoría.
- Se muestran todos los productos coincidentes.
- Si no hay productos, se muestra un mensaje amigable.
- Se muestra el nombre de la categoría en la vista.
- Se reutiliza el template de card de producto.
- No se usa API, fetch ni base de datos.
