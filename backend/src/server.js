// src/server.js
const app = require('./api');

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log('server running on port 3001'));