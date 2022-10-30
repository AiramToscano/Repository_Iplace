// src/server.js
const app = require('./api');

const port = process.env.API_PORT || 3004;

app.listen(port, () => console.log(`server running on port ${port}`));