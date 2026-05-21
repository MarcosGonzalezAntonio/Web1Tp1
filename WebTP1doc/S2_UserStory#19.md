# S2_UserStory #19: Buscador de Productos
**Código:** `#main-s2-us19`
**Nombre:** Buscador de productos

## 🌐 Contexto
El buscador es la herramienta de acceso directo más utilizada en un ecommerce. Implementaremos una búsqueda por coincidencia parcial que permita al usuario encontrar productos rápidamente escribiendo solo una parte del nombre en el header.

## 🧠 Lógica de Negocio
Utilizaremos una búsqueda por **Query String** y filtrado por texto.
- Parámetro: `/search?query=texto`.
- Filtro: `.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))`.
- Alcance: Coincidencia parcial en el nombre del producto.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Formulario en Header:** Asegúrate de que el `<form>` del buscador use `method="GET"` y apunte a `/search`. El input debe tener `name="query"`.
2. **Ruta de Búsqueda:** Define `router.get('/search', ...)` en tus rutas.
3. **Controlador:** Obtén el texto, realiza el filtrado en el array de productos y envía los resultados a una vista de listado (puedes reutilizar la de categorías).
4. **Resultados Vacíos:** Si no hay coincidencias, muestra un mensaje: "No se encontraron productos para tu búsqueda".

## ✅ Criterios de Validación (Texto Original)
- La ruta /search?query=... filtra productos por coincidencia parcial.
- Si hay resultados, se muestran en la grilla de productos.
- Si no hay resultados, se muestra un mensaje informativo.
- No se usa API ni base de datos.
- El buscador es accesible desde el formulario del header.
