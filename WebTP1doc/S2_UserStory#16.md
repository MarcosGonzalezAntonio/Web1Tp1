# S2_UserStory #16: Servicio de Carrito
**Código:** `#main-s2-us16`
**Nombre:** Servicio del carrito

## 🌐 Contexto
Siguiendo la misma filosofía que con los productos, encapsularemos la gestión de la sesión del carrito en un servicio. Esto centraliza las operaciones matemáticas y de búsqueda de productos, evitando errores de cálculo y facilitando la migración futura a persistencia en base de datos.

## 🧠 Lógica de Negocio
El servicio recibirá el objeto de sesión (`req.session`) y realizará las operaciones de mutación sobre el array del carrito.
- **Operaciones:** Add, Remove, UpdateQuantity, Clear, CalculateTotal.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Crear Servicio:** Genera `src/services/cartService.js`.
2. **Abstracción:** Define funciones que no dependan directamente de Express, sino que reciban el array del carrito como argumento y devuelvan el array modificado.
3. **Cálculo de Totales:** Implementa la lógica para multiplicar `precio * cantidad` de forma centralizada.
4. **Integración:** En el controlador de carrito, llama a estos métodos. Ejemplo: `req.session.cart = cartService.addItem(req.session.cart, productID)`.

## ✅ Criterios de Validación (Texto Original)
- Toda la lógica del carrito (agregar, quitar, modificar, vaciar, calcular total) está encapsulada en un servicio.
- req.session.cart se manipula solo a través del servicio o siguiendo sus reglas.
- Los controladores se mantienen simples.
- No se usa API ni base de datos.
