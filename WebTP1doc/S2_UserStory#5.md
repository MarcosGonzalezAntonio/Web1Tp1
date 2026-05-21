# S2_UserStory #5: Checkout Temporal
**Código:** `#main-s2-us5`
**Nombre:** Vista temporal de Checkout

## 🌐 Contexto
Aunque el proceso de pago completo se implementará en sprints futuros, es necesario proporcionar una ruta de destino para el usuario que finaliza su compra en el carrito, manteniendo la navegación fluida y coherente.

## 🧠 Lógica de Negocio
Esta es una **vista informativa**. No requiere persistencia de datos ni procesamiento de transacciones. Su única función es informar sobre el cronograma del proyecto y permitir el retorno a áreas funcionales del sitio.
- Ruta: `GET /checkout`.
- Respuesta: Renderizar una plantilla simple.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Definir Ruta:** En `productRoute.js` o `indexRoute.js`, añade el endpoint para `/checkout`.
2. **Crear Vista:** En `src/views/checkout.ejs`, implementa un diseño minimalista que incluya los mensajes y botones solicitados.
3. **Controlador:** Crea una función simple en el controlador que haga `res.render('checkout')`. Asegúrate de que no haya lógica de negocio bloqueante aquí.

## ✅ Criterios de Validación (Texto Original)
- La ruta /checkout existe.
- La vista se renderiza correctamente.
- No hay lógica de negocio.
- No hay errores en consola.
- No se devuelve un código HTTP incorrecto (debe ser 200).
- La app muestra una vista simple con: mensaje “Checkout disponible en el próximo sprint”, botón “Volver al carrito”, botón “Volver al inicio”.
