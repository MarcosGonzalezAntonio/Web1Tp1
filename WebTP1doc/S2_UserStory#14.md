# S2_UserStory #14: Layout base
**Código:** `#main-s2-us14`
**Nombre:** Layout base

## 🌐 Contexto
En el Sprint 1, cada página era un archivo independiente con su propio header y footer. Esto generaba redundancia y dificultad para actualizar componentes globales. Ahora unificaremos la estructura básica en un "Layout" para cumplir con el principio **DRY (Don't Repeat Yourself)**.

## 🧠 Lógica de Negocio
Utilizaremos las capacidades de **EJS (Includes)** o un motor de layouts para definir una estructura común que envuelva el contenido variable de cada página.
- **Componentes comunes:** `<head>`, scripts de CSS, Scripts de JS, Header y Footer.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Crear Partials:** Separa el código del header en `header.ejs` y el footer en `footer.ejs` dentro de `src/views/partials/`.
2. **Layout Principal:** Crea `src/views/layouts/main.ejs` que incluya las etiquetas estructurales de HTML y llame a los partials.
3. **Refactorización de Vistas:** Limpia tus vistas (index, product, cart) para que solo contengan el bloque central de contenido y utiliza `<%- include(...) %>` para insertar las partes comunes.
4. **Excepciones:** Las páginas de Login y Registro pueden tener un diseño diferente, por lo que podrían no extender este layout base.

## ✅ Criterios de Validación (Texto Original)
- Se crea views/layouts/main.ejs o se unifica la estructura mediante partials.
- Todas las vistas principales comparten un layout consistente (header, footer, estilos).
- El layout funciona correctamente en todas las rutas (excepto posiblemente login y registro).
- No se usa API.
