const express = require('express');

const { getAllProducts,
    getProductsByName, getProductsByPriceOrname } = require('../controller/ProductsController');

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.post('/', getProductsByName);
productsRouter.post('/pricesorname', getProductsByPriceOrname);

module.exports = productsRouter;