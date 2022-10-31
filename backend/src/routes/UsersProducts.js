const express = require('express');

const { createUserProducts } = require('../controller/UsersProductsController');

const UserPorductsRouter = express.Router();

UserPorductsRouter.post('/', createUserProducts);

module.exports = UserPorductsRouter;