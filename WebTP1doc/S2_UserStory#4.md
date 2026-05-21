# S2_UserStory #4: Carrito en Sesión
**Código:** `#main-s2-us4`
**Nombre:** Carrito en sesión

## 🌐 Contexto
El carrito de compras es el corazón del ecommerce. En este sprint, permitiremos que el carrito "recuerde" los productos elegidos por el usuario mientras navega, pasando de una vista estática a un sistema con estado persistente en el servidor.

## 🧠 Lógica de Negocio
Utilizaremos el middleware `express-session` para almacenar el carrito. El estado se guardará en el servidor y se identificará mediante una cookie en el navegador del usuario.
- **Persistencia:** `req.session.cart`.
- **Formato:** Array de objetos `{ productId, quantity }`.
- **Lógica:** Al agregar, buscar si el ID ya existe para sumar la cantidad; de lo contrario, hacer un `.push()`.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Instalar Dependencia:** `npm install express-session`.
2. **Configurar Middleware:** En `app.js`, inicializar el middleware con una clave secreta (`secret`).
3. **Controlador de Carrito:** Crear `cartController.js` con métodos para:
   - `add`: Recibir un ID por POST y guardarlo en la sesión.
   - `list`: Renderizar la vista `/cart` combinando los IDs de la sesión con los datos reales del archivo JSON.
   - `update`: Incrementar/decrementar cantidades.
   - `clear`: Vaciar `req.session.cart`.
4. **Vista de Carrito:** En `cart.ejs`, iterar sobre los productos combinados y calcular subtotales y totales.

## ✅ Criterios de Validación (Texto Original)
- No debe usarse express-session para login, usuarios o seguridad.
- Se utiliza express-session correctamente y el carrito se almacena en req.session.cart.
- El carrito persiste durante la navegación, pero se pierde al cerrar el navegador.
- El carrito no almacena datos completos del producto, solo { productId, quantity }.
- La vista /cart muestra información real del producto combinada con la sesión.
- Los botones ➕ y ➖ funcionan correctamente.
- El botón “Vaciar carrito” reinicia el estado.
- El total general se calcula correctamente.
- El estado vacío se maneja con un mensaje claro y usable.
- No se utiliza API ni base de datos en esta etapa.
- No se guarda información sensible en la sesión.
