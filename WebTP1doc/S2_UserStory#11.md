# S2_UserStory #11: Sin Stock
**Código:** `#main-s2-us11`
**Nombre:** Indicador de producto sin stock

## 🌐 Contexto
La honestidad en la disponibilidad es clave para la confianza del usuario. Implementaremos una validación visual y funcional que impida que un usuario intente comprar algo que no tenemos disponible físicamente, basándonos en los datos del catálogo.

## 🧠 Lógica de Negocio
Evaluaremos el campo `stock` de cada objeto de producto durante el renderizado.
- **Visual:** Condicional en EJS para mostrar un badge.
- **Funcional:** Deshabilitar la interacción con el botón de compra.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Template de Card:** En `card.ejs`, envuelve el botón "Agregar" en un condicional: `<% if (product.stock > 0) { ... } else { ... } %>`.
2. **Atributo Disabled:** Si el stock es 0, añade la propiedad `disabled` al botón y una clase de CSS (ej. `.no-stock`) para cambiar su apariencia (opacidad, cursor, etc.).
3. **Badge:** Añade un elemento HTML (etiqueta) con el texto "Sin stock" que solo sea visible cuando la condición se cumpla.

## ✅ Criterios de Validación (Texto Original)
- Si stock === 0, la card muestra un badge “Sin stock”.
- El botón “Agregar al carrito” aparece deshabilitado.
- No se permite agregar productos sin stock.
- No se usa API ni base de datos.
- No se altera la estructura del JSON.
