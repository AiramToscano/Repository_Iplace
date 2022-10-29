const express = require('express');

const { Login } = require('../controller/LoginController');

const { dataValidate } = require('../middleware/ValidadeUser');

const loginRouter = express.Router();

loginRouter.post('/', dataValidate, Login);

module.exports = loginRouter;