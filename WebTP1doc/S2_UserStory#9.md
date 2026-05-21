# S2_UserStory #9: Detalle de Producto
**Código:** `#main-s2-us9`
**Nombre:** Detalle del producto

## 🌐 Contexto
Esta es la evolución de la vista estática de producto del Sprint 1. Ahora, en lugar de tener una página HTML por producto, tendremos una única plantilla dinámica que se llena con la información correcta basándose en el ID presente en la URL.

## 🧠 Lógica de Negocio
Utilizaremos **Parámetros de Ruta** en Express para identificar el producto solicitado.
- Ruta: `/products/:id`.
- Obtención: `req.params.id`.
- Validación: Si el ID no existe en nuestro JSON, debemos disparar la lógica de la página 404.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Ruta Dinámica:** Configura la ruta en Express usando el prefijo `:` para el parámetro.
2. **Búsqueda:** En el controlador, usa `.find()` sobre el array de productos para localizar el objeto cuyo ID coincida.
3. **Manejo de Errores:** Si `.find()` devuelve `undefined`, redirige o renderiza la vista 404 con el status adecuado.
4. **Vista Dinámica:** Mapea los campos del objeto encontrado (nombre, precio, descripción, imágenes) a los elementos de la plantilla EJS.

## ✅ Criterios de Validación (Texto Original)
- El ID de la URL corresponde al producto mostrado.
- Se muestra toda la información: nombre, precio, descripción, categoría, primera imagen disponible.
- El botón “Agregar al carrito” está presente.
- Dado que la persona usuaria accede a un ID que no existe, entonces debe renderizar una página 404 con un mensaje claro.
- BONUS: Si el producto no tiene imagen, se muestra una imagen de fallback.
- No se utiliza API REST, fetch ni base de datos.
