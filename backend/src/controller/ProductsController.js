const ProductsService = require('../service/ProductsService');

const getAllProducts = async (_req, res, _next) => {
    const foundProducts = await ProductsService.getAllProducts();
    return res.status(200).json(foundProducts);
};

const getProductsByName = async (req, res, _next) => {
    const { name } = req.body;
    const foundProducts = await ProductsService.getProductsByname(name);
    return res.status(200).json(foundProducts);
};

const getProductsByPriceOrname = async (req, res, _next) => {
    const { query } = req.body;
    const foundProducts = await ProductsService.getProductByPriceOrName(query);
    return res.status(200).json(foundProducts);
};

module.exports = { getAllProducts, getProductsByName, getProductsByPriceOrname };