# S2_UserStory #17: Normalización de IDs
**Código:** `#main-s2-us17`
**Nombre:** Normalización de IDs

## 🌐 Contexto
La robustez de una aplicación se mide por cómo maneja datos inesperados. Las URLs dinámicas son una puerta de entrada para errores si el usuario ingresa texto donde se espera un número. Implementaremos una capa de limpieza y validación de IDs para asegurar la estabilidad del sistema.

## 🧠 Lógica de Negocio
Crearemos una función utilitaria que procese cualquier ID proveniente de `req.params` o `req.body` antes de enviarlo a los servicios de búsqueda.
- **Tipado:** Asegurar que el ID sea un número (si el JSON usa IDs numéricos).
- **Validación:** Comprobar existencia.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Función Helper:** Crea `src/utils/normalizeId.js` o añádela a tus servicios.
2. **Lógica de Normalización:**
   - Si el ID no es numérico (ej. `GET /products/abc`), devolver un error **400 Bad Request**.
   - Si el ID es válido pero no existe en el catálogo, devolver **404 Not Found**.
3. **Uso:** Llama a esta función al inicio de cada controlador que dependa de un ID de producto.

## ✅ Criterios de Validación (Texto Original)
- Se implementa una función normalizeId() o lógica equivalente.
- Escenario: ID no numérico → Devuelve error 400 o maneja la excepción.
- Escenario: ID numérico pero inexistente → Devuelve error 404.
- No se usa API.
