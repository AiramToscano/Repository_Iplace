const { Users } = require('../database/models');

const CreateUser = async (name, email, password) => {
    const newUser = await Users.create({ name, email, password });
    return newUser;
  };

module.exports = { CreateUser };