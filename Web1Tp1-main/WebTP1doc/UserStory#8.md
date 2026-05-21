## User Story #8

<aside>
🤝

Es recomendable trabajar esta story de forma colaborativa, usando los escenarios como subtareas o pasos necesarios para completarla.

</aside>

<aside>
⚠️

Para poder implementar esta User Story es necesario que las Stories *#main-s1-us3*, *#main-s1-us4*, *#main-s1-us5*, *#main-s1-us6* y *#main-s1-us7* estén terminadas o con un alto grado de avance.

</aside>

***Código:** #main-s1-us8*

***Nombre:** Definir enlaces y esquema de navegación*

### **Detalle**

Como líder del Equipo de Desarrollo, quiero que implementemos el siguiente esquema lógico de navegación para dar cumplimiento al *navigation tree* definido por el Equipo de Diseño.

🏠 HOME
   📦 PRODUCT
      🛒 CART
   🛒 CART
      💵 CHECKOUT
   🔑 LOGIN
      ➕ REGISTER
   ➕ REGISTER

![image.png](attachment:df6c43cf-b75b-48ea-a6bf-dcaa08857bb6:image.png)

### **Escenarios**

- (de 🏠Home a 📦Product) Dado que la persona usuaria está situada en la página de inicio y está observando un listado de productos, cuando hace click sobre un producto, entonces debe poder ir hasta la página del producto correspondiente.
- (de 🏠Home a 🛒Cart) Dado que la persona usuaria está situada en la página de inicio y quiere ver su carrito, cuando hace click sobre el botón ‘ver carrito’, entonces debe poder ir hasta la página del carrito.
- (de 🏠Home a 🔑Login) Dado que la persona usuaria está situada en la página de inicio y no se ha identificado y quiere identificarse y no posee credenciales de usuario y quiere identificarse, cuando hace click sobre el botón ‘Registrar’, entonces debe poder ir hasta la página de registro.
- ✨***¡BONUS!*** (de 🏠Home a ➕Register) Dado que la persona usuaria está situada en la página de inicio y no se ha identificado y quiere identificarse, cuando hace click sobre el botón ‘Iniciar sesión’, entonces debe poder ir hasta la página de login.
- (de 📦Product a 🛒Cart) Dado que la persona usuaria está situada en la página de un producto y quiere ver su carrito, cuando hace click sobre el botón ‘ver carrito’, entonces debe poder ir hasta la página del carrito.
- (de 🛒Cart a 💵Checkout) Dado que la persona usuaria está situada en la página del carrito y quiere cerrar su orden de compra (y pagarla), cuando hace click sobre el botón ‘Pagar’, entonces debe poder ir hasta la página de pago (checkout).
- (de 🔑Login a 🏠 Home) Dado que la persona usuaria está situada en la página de login y ha ingresado los datos correctos para identificarse, cuando hace click sobre el botón ‘Ok’, entonces debe poder ir hasta la página de inicio.
- (de 🔑Login a ➕Register) Dado que la persona usuaria está situada en la página de login y no posee credenciales de usuario y quiere identificarse, cuando hace click sobre el botón ‘Registrar’, entonces debe poder ir hasta la página de registro.
- (de ➕Register a 🏠Home) Dado que la persona usuaria está situada en la página de registro y ha completado el formulario, cuando hace click sobre el botón ‘Ok’, entonces debe poder ir hasta la página de Inicio.
