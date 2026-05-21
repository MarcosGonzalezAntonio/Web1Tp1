# S2_UserStory #7: Productos más pedidos en Inicio
**Código:** `#main-s2-us7`
**Nombre:** Mostrar productos más pedidos

## 🌐 Contexto
Buscamos destacar los productos estrella del ecommerce directamente en la página de inicio. Esta funcionalidad permite jerarquizar el catálogo basándose en criterios de popularidad (flags en los datos), guiando al usuario hacia las mejores opciones de compra.

## 🧠 Lógica de Negocio
Similar a la US #6, pero con un filtro específico. Buscaremos productos que tengan un marcador de "destacado" o simplemente ampliaremos la muestra a los más relevantes del catálogo.
- **Límite:** 10 productos.
- **Criterio:** Filtrar por un campo `bestSeller` o similar en el JSON.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Filtro de Datos:** En tu servicio de productos, crea una función `getTopSellers()` que filtre el array del JSON.
2. **Controlador Home:** Solicita estos 10 productos y envíalos a la vista en una variable separada de los "sugeridos".
3. **Consistencia Visual:** Reutiliza el partial `card.ejs`. Asegúrate de que el diseño soporte una grilla de hasta 10 elementos de forma responsiva.
4. **Resiliencia:** Mantén la lógica de imagen de fallback desarrollada en la US anterior.

## ✅ Criterios de Validación (Texto Original)
- Se muestran hasta 10 productos en la sección “Los más pedidos”.
- Cada producto muestra: imagen, nombre, precio, link a /products/:id.
- Se muestra una imagen de fallback si no hay foto.
- No se usa API, fetch ni base de datos.
- La Home debe leer los productos desde products.json.
- La selección puede ser: marcados con un flag, y aleatorios.
