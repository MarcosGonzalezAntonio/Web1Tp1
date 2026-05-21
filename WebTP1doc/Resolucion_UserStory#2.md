## Resolución User Story #2

***Código:** #main-s1-us2*

***Nombre:** Definir Rutas*

### **Detalle de la Implementación**

Como equipo de desarrollo, hemos definido y configurado en `app.js` las rutas correspondientes para que cada vista desarrollada en el paso anterior pueda ser accedida de manera amigable desde el navegador.

- **Configuración de Rutas en `app.js`:**
  Se ha utilizado `app.get()` de Express para mapear cada URL al renderizado de su respectiva vista en EJS.

| **Ruta** | **Vista renderizada (`.ejs`)** | **Descripción / Validación** |
| --- | --- | --- |
| **`/`** | `pages/index.ejs` | 🏠 Se accede a la raíz y se visualiza la página de inicio. |
| **`/products`** | `pages/product.ejs` | 📦 Se visualiza la página de información de los productos. |
| **`/cart`** | `pages/cart.ejs` | 🛒 Se visualiza la página del carrito. |
| **`/checkout`** | `pages/checkout.ejs` | 💵 Se visualiza la página de pago. |
| **`/register`** | `pages/register.ejs` | ➕ Se visualiza la página de registro para nuevos usuarios. |
| **`/login`** | `pages/login.ejs` | 🔑 Se visualiza la página de inicio de sesión. |

*Nota: Se aseguró de definir la ruta `/products` correctamente según los criterios de aceptación especificados para este User Story.*
