## User Story #1

<aside>
🤝

Es recomendable trabajar esta story de forma colaborativa, usando las rutas como subtareas o pasos necesarios para completarla.

</aside>

***Código:** #main-s1-us1*

***Nombre:** Generar estructura del Proyecto*

### **Detalle**

Como líder del Equipo de Desarrollo, quiero que organicemos nuestra app usando la estructura de directorios que adjunto abajo, de esta forma podremos dividir mejor el trabajo.

- Estructura propuesta
    
    📁 **views**
    
        📁 **partials** (carpeta para elementos y componentes)
    
            📄 header.ejs (encabezado del sitio)
    
            📄 footer.ejs (pie del sitio)
    
            📄 productCard.ejs (barra lateral)
    
    ...
    
    📁 **pages**
    
        📄 index.ejs (home/landing del ecommerce)
    
        📄 login.ejs (inicio de sesión)
    
        📄 register.ejs (registro de users)
    
        📄 product.ejs (página de un producto)
    
        📄 cart.ejs (página del carrito)

        📄 checkout.ejs (página de pago)
    
    ...
    
    📁 **assets**
    
    ⚙️ package.json
    
    ⏯️ app.js (archivo principal de la app)
    

<aside>
✨

***¡BONUS!*** Si estamos bien de tiempo, y el proyecto avanza satisfactoriamente, es una buena idea aplicar diseño atómico a los elementos parciales, de manera que se pueda construir e importar partes del sitio que se utilizarán en más de un lugar (por ejemplo, los inputs, los botones o el encabezado). En este caso, la carpeta 📁partials estará bastante poblada.

</aside>

A continuación, tenemos un ejemplo de diseño atómico.

![image.png](attachment:14c53137-0a01-4c1e-a314-86646a54d75e:image.png)

🔗 Más info sobre diseño atómico [en este post](https://medium.com/pixel-perfect/qu%C3%A9-es-el-dise%C3%B1o-at%C3%B3mico-a5cbed06688e).
