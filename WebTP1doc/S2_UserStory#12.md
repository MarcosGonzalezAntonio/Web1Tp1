# S2_UserStory #12: Total de Carrito en Header
**Código:** `#main-s2-us12`
**Nombre:** Total del carrito en el header

## 🌐 Contexto
Queremos que el usuario tenga visibilidad constante de su progreso de compra. Al mostrar la cantidad de productos en el encabezado, evitamos que el usuario tenga que entrar al carrito para saber cuántos artículos ha seleccionado.

## 🧠 Lógica de Negocio
Dado que el encabezado es un componente global (presente en todas las vistas), necesitamos que el dato del carrito de la sesión esté disponible globalmente.
- **Middleware Global:** Un middleware que asigne `req.session.cart` a `res.locals.cartTotal`.
- **Cálculo:** Suma de las cantidades (`quantity`) de cada item en el array de sesión.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Middleware de Locales:** En `app.js`, crea un middleware antes de las rutas: `app.use((req, res, next) => { res.locals.cartCount = ...; next(); })`.
2. **Lógica de Suma:** Usa `.reduce()` sobre `req.session.cart` para obtener el total de ítems.
3. **Vista Header:** En el partial del header, localiza el ícono del carrito y añade un pequeño contenedor numérico que imprima `<%= cartCount %>`.
4. **Manejo de Cero:** Asegúrate de que si el carrito es `undefined`, el contador muestre `0`.

## ✅ Criterios de Validación (Texto Original)
- El header muestra un ícono de carrito con la cantidad total de productos.
- Si el carrito está vacío, muestra 0.
- Se lee correctamente desde req.session.cart.
- No se usa API ni base de datos.
