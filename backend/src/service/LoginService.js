const md5 = require('md5');
const { Users } = require('../database/models');
const { generateJWT } = require('../auth/jwt');

const Login = async ({ email, password }) => {
    const pwHash = md5(password);
    const user = await Users.findOne({ where: { email, password: pwHash } });
    const token = generateJWT(user);
    const { name, id } = user;
    return { id, name, email: user.email, token };
  };

  const FindUser = async (email) => {
    const foundUser = await Users.findOne({ where: { email } });
    return foundUser;
  };

  module.exports = { Login, FindUser };