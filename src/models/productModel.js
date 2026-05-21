const fs = require('fs');
const path = require('path');

const getProducts = () => {
    const productsFilePath = path.join(__dirname, '../data/products.json');
    const productsData = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(productsData);
};

module.exports = {
    findAll: () => getProducts(),
    
    findById: (id) => {
        return getProducts().find(p => String(p.id) === String(id));
    },

    findByCategory: (category) => {
        if (!category) return [];
        return getProducts().filter(p => p.category.toLowerCase() === category.toLowerCase());
    },

    search: (query) => {
        if (!query || String(query).trim() === '') return [];

        const lowerQuery = String(query).trim().toLowerCase();
        return getProducts().filter(product => {
            return String(product.name).toLowerCase().includes(lowerQuery);
        });
    },

    getTopSellers: () => {
        const products = getProducts();
        let topSellers = products.filter(p => p.bestSeller === true || p.destacado === true);

        if (topSellers.length < 10) {
            const remainingProducts = products.filter(p => p.bestSeller !== true && p.destacado !== true);
            const needed = 10 - topSellers.length;
            // Mezclar y tomar los elementos faltantes
            const randomProducts = remainingProducts.sort(() => 0.5 - Math.random()).slice(0, needed);
            topSellers = [...topSellers, ...randomProducts];
        }

        return topSellers.slice(0, 10);
    }
};
