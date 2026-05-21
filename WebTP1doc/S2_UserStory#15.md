# S2_UserStory #15: Servicio de Productos
**Código:** `#main-s2-us15`
**Nombre:** Servicio de productos

## 🌐 Contexto
Para evitar que los controladores se vuelvan gigantes y difíciles de testear, extraeremos la lógica de manipulación de archivos a una capa de "Servicios". Esto prepara el terreno para el Sprint 3, donde simplemente cambiaremos el servicio de JSON a Base de Datos sin tocar los controladores.

## 🧠 Lógica de Negocio
El servicio será un módulo de JS puro que se encargue del **I/O (Input/Output)** de archivos.
- **Herramienta:** Módulo `fs` (FileSystem) de Node.
- **Formato:** `JSON.parse()` para lectura y `JSON.stringify()` para escritura.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Archivo de Servicio:** Crea `src/services/productService.js`.
2. **Métodos Core:** Implementa funciones como `findAll()`, `findById(id)`, `findByCategory(cat)`, y `search(query)`.
3. **Exportación:** Exporta un objeto con estos métodos.
4. **Refactorización de Controladores:** Importa el servicio en tus controladores y reemplaza el código de lectura de archivos por llamadas a los métodos del servicio (ej: `const products = productService.findAll()`).

## ✅ Criterios de Validación (Texto Original)
- Se crea services/productsService.js.
- Toda la lógica de lectura y filtrado de productos reside en el servicio.
- Los controladores utilizan el servicio y quedan limpios de lógica de negocio directa.
- No hay lógica de lectura de archivos JSON dentro de los controladores.
- No se usa API ni base de datos.
