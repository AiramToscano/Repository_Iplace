const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const SECRET_KEY = readFileSync('jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '6h',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, SECRET_KEY, jwtConfig);
  return token;
};

module.exports = { generateJWT };