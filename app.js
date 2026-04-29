const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));

// Rutas
app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Home' });
});

app.get('/login', (req, res) => {
    res.render('pages/login', { title: 'Iniciar Sesión' });
});

app.get('/register', (req, res) => {
    res.render('pages/register', { title: 'Registro' });
});

// Base de datos simulada de productos
const mockProducts = [
    { id: '1', name: 'Auriculares Inalámbricos', price: '1500 pts', category: 'Electrónica', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', description: 'Experimenta el mejor sonido con estos auriculares con cancelación de ruido activa y batería de larga duración.' },
    { id: '2', name: 'Zapatillas Deportivas', price: '2500 pts', category: 'Indumentaria', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', description: 'Ideales para running y entrenamiento intenso. Ultra livianas, con suela anti-deslizante y extremadamente cómodas.' },
    { id: '3', name: 'Smartwatch Serie 5', price: '3000 pts', category: 'Electrónica', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80', description: 'Controlá tu salud, cuenta tus pasos y gestiona tus notificaciones directamente desde tu muñeca. Resistente al agua.' },
    { id: '4', name: 'Mochila Urbana', price: '800 pts', category: 'Indumentaria', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', description: 'Mochila minimalista, perfecta para el día a día. Compartimento porta notebook acolchado y materiales resistentes al agua.' }
];

app.get(['/product', '/product/:id'], (req, res) => {
    const productId = req.params.id;
    
    // Si no se especifica ID, elegimos el primero por defecto
    const product = productId ? mockProducts.find(p => p.id === productId) : mockProducts[0];

    if (!product && productId) {
        // Producto no existe, vista de error 404
        const suggestedProducts = [...mockProducts].sort(() => 0.5 - Math.random());
        return res.status(404).render('pages/productNotFound', { title: 'Producto no encontrado - Vimet Store', suggestedProducts });
    }

    // Productos relacionados (misma categoría)
    const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id);
    // Si no hay de la misma categoría, mostramos algunos aleatorios
    const finalRelated = relatedProducts.length > 0 ? relatedProducts : [...mockProducts].filter(p => p.id !== product.id).slice(0, 4);

    res.render('pages/product', { title: `${product.name} - Vimet Store`, product, relatedProducts: finalRelated });
});

app.get('/cart', (req, res) => {
    res.render('pages/cart', { title: 'Carrito' });
});

app.get('/checkout', (req, res) => {
    res.render('pages/checkout', { title: 'Checkout' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

