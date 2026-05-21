## Resolución User Story #1

***Código:** #main-s1-us1*

***Nombre:** Generar estructura del Proyecto*

### **Detalle de la Implementación**

Se ha cumplido con la estructura propuesta para la aplicación con el objetivo de facilitar el trabajo colaborativo. Adicionalmente, se aplicó la técnica de **Atomic Design** sugerida en el bonus.

- **Inicialización:**
  - Se creó el archivo `package.json` para gestionar las dependencias del proyecto.
  - Se instalaron `express` y `ejs`.

- **Estructura de Directorios (Atomic Design):**
  - 📁 **views**: Carpeta principal del motor de vistas.
    - 📁 **pages**: Vistas completas (`index.ejs`, `login.ejs`, `register.ejs`, `product.ejs`, `cart.ejs`, `checkout.ejs`).
    - 📁 **partials**: Componentes modulares y reutilizables.
      - 📁 **atoms**: Componentes básicos.
      - 📁 **molecules**: Agrupación de átomos (`productCard.ejs`).
      - 📁 **organisms**: Componentes complejos (`header.ejs`, `footer.ejs`).
  - 📁 **assets**: Carpeta pública con archivos estáticos (CSS, imágenes).

- **Servidor (`app.js`):**
  - Archivo principal inicializado configurando Express, EJS como motor de vistas y `assets/` como directorio estático. Se configuró para escuchar en el puerto 3000.
