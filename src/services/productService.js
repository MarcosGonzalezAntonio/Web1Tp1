const productModel = require('../models/productModel');

module.exports = {
    findAll: () => productModel.findAll(),
    findById: (id) => productModel.findById(id),
    findByCategory: (category) => productModel.findByCategory(category),
    search: (query) => productModel.search(query),
    getTopSellers: () => productModel.getTopSellers()
};
