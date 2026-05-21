# S2_UserStory #3: Validar Registro
**Código:** `#main-s2-us3`
**Nombre:** Validar Registro

## 🌐 Contexto
Pasamos de una simple maqueta visual de formulario a un sistema que protege la integridad de los datos. La validación es el primer paso para asegurar que los usuarios se registren con información válida y contraseñas seguras antes de procesar el alta en el sistema.

## 🧠 Lógica de Negocio
Implementaremos validaciones tanto en el lado del cliente (para feedback inmediato) como en el lado del servidor (para seguridad). Usaremos el objeto de respuesta de Express para devolver errores si los datos no cumplen los requisitos.
- **Procesamiento de strings:** Uso de `.trim()` para limpiar espacios.
- **Validación de Regex:** Para el formato de email y complejidad de contraseña.

## 🛠️ Guía de Implementación (Paso a Paso)
1. **Controlador de Usuario:** En el método `processRegister` del `userController`, extrae los datos de `req.body`.
2. **Lógica de Validación:** Implementa condicionales para verificar cada criterio (longitud, caracteres especiales, cadenas prohibidas).
3. **Manejo de Errores:** Si hay errores, vuelve a renderizar la vista de registro enviando un objeto con los mensajes de error para que se muestren bajo cada campo.
4. **Sanitización:** Asegúrate de que los campos "Nombre" y "Apellido" no tengan espacios accidentales al inicio o final.

## ✅ Criterios de Validación (Texto Original)
- Los campos Nombre, Apellido, Email y Contraseña no están en blanco.
- El email es válido.
- Los campos no tienen espacios en blanco al principio o al final.
- La contraseña tiene al menos 8 caracteres;
- debe incluir al menos una letra;
- debe incluir al menos un número;
- debe incluir al menos un carácter especial (! @ # $ % ^ & * ( ) , . ? " : { } | < >);
- no debe contener cadenas prohibidas (“password”, “1234”, “qwerty”, el nombre del sitio, el nombre del usuario);
- no es igual al email.
