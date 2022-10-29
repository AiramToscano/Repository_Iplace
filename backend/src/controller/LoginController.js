const UserService = require('../service/LoginService');

const Login = async (req, res, _next) => {
    const { email, password } = req.body;
    const user = await UserService.Login({ email, password });
    return res.status(200).json(user);
};

module.exports = { Login };