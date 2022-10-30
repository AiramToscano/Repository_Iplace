const express = require('express');
const cors = require('cors');
const Login = require('./routes/LoginRoute');
const registerRouter = require('./routes/RegisterRoute');

// ...

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', Login);
app.use('/register', registerRouter);

module.exports = app;
