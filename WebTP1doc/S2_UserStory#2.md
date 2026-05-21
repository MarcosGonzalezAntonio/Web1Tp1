# S2_UserStory #2: Página 404
**Código:** `#main-s2-us2`
**Nombre:** Página 404

## 🌐 Contexto
En una aplicación real, el usuario puede intentar acceder a rutas inexistentes. En el prototipo estático esto devolvía un error por defecto; ahora implementaremos una solución elegante para mejorar la experiencia de usuario (UX) y mantener la consistencia visual del sitio.

## 🧠 Lógica de Negocio
Utilizaremos un **Middleware de Express** al final de la pila de rutas. Este capturará cualquier petición que no haya coincidido con las rutas definidas previamente y responderá con un código de estado **404**.
- Función: `app.use((req, res, next) => { ... })`.
- Respuesta: `res.status(404).render('not-found')`.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Crear Vista:** Genera un archivo `not-found.ejs` en `src/views/` con un diseño acorde al resto del ecommerce.
2. **Implementar Middleware:** En el archivo principal (ej: `app.js`), ubica el middleware de 404 **después** de todas las definiciones de rutas de productos, usuarios, etc.
3. **Manejar Estado HTTP:** Asegúrate de enviar explícitamente el status `404` antes del render para que los buscadores y herramientas de monitoreo lo identifiquen correctamente.

## ✅ Criterios de Validación (Texto Original)
Como líder del Equipo de Desarrollo, quiero que nuestra app muestre una página de error para todas las rutas que no están mapeadas con un recurso, el navegador deberá mostrar una Página de Error 404 (y su correspondiente estado HTTP) cuando se ingrese una URL incorrecta.
Son bienvenidas las ideas acerca de cómo mejorar la experiencia de las personas usuarias que llegan a una página no existente y lograr que continúen navegando nuestra app.
