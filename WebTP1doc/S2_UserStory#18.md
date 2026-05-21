# S2_UserStory #18: Ordenar Productos por Precio
**Código:** `#main-s2-us18`
**Nombre:** Ordenar productos por precio

## 🌐 Contexto
A medida que el catálogo crece, el usuario necesita herramientas para organizar la información. Implementaremos un sistema de ordenamiento dinámico que permita al usuario decidir si quiere ver primero lo más barato o lo más caro, mejorando la usabilidad del listado general.

## 🧠 Lógica de Negocio
Utilizaremos **Query Strings** en la URL para capturar la preferencia del usuario.
- Formato: `/products?sort=asc` o `/products?sort=desc`.
- Herramienta: Método `.sort()` de Javascript sobre el array de productos.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Captura de Parámetro:** En el controlador de listado, obtén el valor con `req.query.sort`.
2. **Lógica de Ordenamiento:**
   - Si es `asc`: `a.price - b.price`.
   - Si es `desc`: `b.price - a.price`.
3. **Persistencia Visual:** Asegúrate de que los botones o selectores de la vista reflejen el orden seleccionado actualmente.
4. **Valor por Defecto:** Si no hay parámetro `sort`, mantén el orden original del JSON.

## ✅ Criterios de Validación (Texto Original)
- La ruta /products?sort=asc ordena por precio de menor a mayor.
- La ruta /products?sort=desc ordena por precio de mayor a menor.
- El ordenamiento funciona correctamente y se refleja en la vista.
- No se usa API ni base de datos.
