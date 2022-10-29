const express = require('express');
const cors = require('cors');
const Login = require('./routes/LoginRoute');

// ...

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', Login);

module.exports = app;
