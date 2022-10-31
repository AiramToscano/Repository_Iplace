const express = require('express');
const cors = require('cors');
const Login = require('./routes/LoginRoute');
const registerRouter = require('./routes/RegisterRoute');
const productsRouter = require('./routes/ProductsRoute');
const usersProductsRouter = require('./routes/UsersProducts');

// ...

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', Login);
app.use('/register', registerRouter);
app.use('/', productsRouter);
app.use('/userproducts', usersProductsRouter);

module.exports = app;
