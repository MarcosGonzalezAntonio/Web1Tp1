# S2_UserStory #1: Reordenar Proyecto
**Código:** `#main-s2-us1`
**Nombre:** Reordenar estructura del proyecto y las rutas de los recursos

## 🌐 Contexto
Esta User Story marca el inicio de la evolución de nuestro prototipo estático (Sprint 1) hacia una aplicación dinámica y profesional. Dejamos atrás la estructura simple para adoptar un patrón de arquitectura **MVC (Modelo-Vista-Controlador)**, lo que nos permitirá escalar el proyecto y separar las responsabilidades de forma clara.

## 🧠 Lógica de Negocio
Para que la aplicación sea mantenible, utilizaremos **Express** para gestionar las rutas y el sistema de archivos de **Node** para organizar los recursos. La lógica se dividirá de la siguiente manera:
- **Modelos:** Gestión de datos (inicialmente archivos JSON).
- **Controladores:** Procesamiento de la lógica antes de enviar los datos a la vista.
- **Rutas:** Definición de los puntos de acceso (endpoints).
- **Vistas:** Plantillas EJS que recibirán datos dinámicos.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Crear Estructura:** En la raíz del proyecto, asegúrate de tener las carpetas `src/`, `src/controllers/`, `src/models/`, `src/routes/` y `src/views/`.
2. **Mover Archivos:** Traslada los archivos existentes a sus nuevas ubicaciones (ej: `app.js` a la raíz o dentro de `src/`).
3. **Configurar Express:** En `app.js`, configura el motor de plantillas (`app.set('view engine', 'ejs')`) y la carpeta de archivos estáticos (`app.use(express.static('public'))`).
4. **Definir Rutas:** Crea archivos como `productRoute.js` que utilicen `express.Router()` para delegar las peticiones a los controladores correspondientes.

## ✅ Criterios de Validación (Texto Original)
Necesitamos reorganizar nuestra app usando la estructura propuesta por el modelo MVC, porque nuestra idea original de estructura no nos permite separar los conceptos de forma adecuada. Con las nuevas formas propuestas estaremos respetando las buenas prácticas.

**Estructura propuesta:**
📁 public
📁 src
  📁 models
    📄productModel.js
  📁 controllers
    📄productController.js
  📁 views
    📄products.ejs
  📁 routes
    📄productRoute.js
  ⏯️ app.js
⚙️ package.json
📁 assets
