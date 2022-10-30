const md5 = require('md5');
const RegisterService = require('../service/RegisterService');

const CreateUser = async (req, res, _next) => {
    const { name, email, password } = req.body;
    const pwHash = md5(password);
    await RegisterService.CreateUser(name, email, pwHash);
    return res.status(201).end();
};

module.exports = { CreateUser };