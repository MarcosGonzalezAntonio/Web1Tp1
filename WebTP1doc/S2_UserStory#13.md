# S2_UserStory #13: Página 500
**Código:** `#main-s2-us13`
**Nombre:** Página 500

## 🌐 Contexto
A medida que agregamos lógica de servidor (lectura de archivos, procesamiento de datos), aumenta la probabilidad de errores internos. Implementar una página 500 asegura que, ante un fallo inesperado, el usuario reciba un mensaje controlado en lugar de un volcado de error técnico o una pantalla blanca.

## 🧠 Lógica de Negocio
Express permite manejar errores mediante un middleware especial de 4 parámetros: `(err, req, res, next)`. Este capturará excepciones no manejadas en los controladores y permitirá una respuesta elegante.
- **Seguridad:** En producción, nunca debemos mostrar el "stack trace" al usuario.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Vista de Error:** Crea `src/views/500.ejs` con un mensaje indicando que hubo un problema técnico y ofreciendo un botón para reintentar o ir a la Home.
2. **Middleware de Error:** Al final de todos los middlewares y rutas en `app.js`, añade:
   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).render('500');
   });
   ```
3. **Pruebas:** Simula un error en un controlador (ej. forzar la lectura de un archivo inexistente) para verificar que la página se renderiza con el status 500.

## ✅ Criterios de Validación (Texto Original)
- Se dispara el middleware de error cuando ocurre un fallo interno.
- Se renderiza una vista 500.ejs correctamente.
- No se filtra información sensible (como rutas internas del servidor o stack traces).
- No se usa API.
