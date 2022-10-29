const express = require('express');
const Login = require('./routes/LoginRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', Login);

module.exports = app;
