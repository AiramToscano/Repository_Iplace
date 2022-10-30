const md5 = require('md5');
const LoginService = require('../service/LoginService');

const dataValidate = async (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = await LoginService.FindUser(email);
  const comp = md5(password);
    if (!foundUser || comp !== foundUser.password) {
      return res.status(404).json('Not found');
    }
    next();
  };

  const createValidation = async (req, res, next) => {
    const { email } = req.body;
    const foundUser = await LoginService.FindUser(email);
    if (foundUser) res.status(409).json({ message: foundUser });
    next();
  };

module.exports = { dataValidate, createValidation };