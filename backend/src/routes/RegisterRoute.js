const express = require('express');

const { CreateUser } = require('../controller/RegisterController');

const { createValidation } = require('../middleware/ValidadeUser');

const registerRouter = express.Router();

registerRouter.post('/', createValidation, CreateUser);

module.exports = registerRouter;