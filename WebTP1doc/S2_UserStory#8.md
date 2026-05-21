# S2_UserStory #8: Productos Relacionados en Detalle
**Código:** `#main-s2-us8`
**Nombre:** Mostrar productos relacionados en la página de producto.

## 🌐 Contexto
La venta cruzada es fundamental. Cuando un usuario ve un producto, queremos ofrecerle alternativas similares para aumentar las posibilidades de conversión. Esta lógica de "productos relacionados" se basa en la categorización de nuestro catálogo actual.

## 🧠 Lógica de Negocio
Al cargar un producto específico, buscaremos otros productos que compartan su misma categoría.
- **Exclusión:** El producto que se está visualizando debe ser excluido de la lista de relacionados para evitar redundancia.
- **Aleatoriedad:** Si hay más de 4 coincidencias, seleccionaremos 4 al azar para dinamizar la vista.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Controlador de Detalle:** En el método `showDetail`, después de encontrar el producto solicitado, realiza una búsqueda secundaria en el array completo filtrando por `category === currentCategory`.
2. **Limpieza:** Filtra el array resultante para quitar el objeto que coincida con el `id` del producto principal.
3. **Selección:** Usa un método de "shuffle" o selección aleatoria para tomar solo 4 items.
4. **Renderizado:** Pasa el array `relatedProducts` a la vista `product-detail.ejs`.

## ✅ Criterios de Validación (Texto Original)
- La sección “Productos relacionados” aparece debajo de la información principal del producto.
- Se muestran hasta 4 productos relacionados que pertenezcan a la misma categoría.
- Cada producto relacionado muestra: imagen, nombre, precio, link a su página /products/:id.
- Se reutiliza el template/card de producto existente.
- Si hay más de 4 productos relacionados, se seleccionan 4 al azar.
- Si no existen productos relacionados, se muestra un mensaje amigable indicando que no hay productos relacionados disponibles.
- No se utiliza API, fetch ni base de datos.
