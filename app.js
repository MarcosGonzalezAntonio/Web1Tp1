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

app.get('/product', (req, res) => {
    res.render('pages/product', { title: 'Producto' });
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
