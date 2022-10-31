const UsersProductsService = require('../service/UserProductService');

const createUserProducts = async (req, res, _next) => {
    const create = await UsersProductsService.createUserProducts(req.body);
    if (create) {
        return res.status(201).end(); 
    }
    return res.status(406).end();
};

module.exports = { createUserProducts };
