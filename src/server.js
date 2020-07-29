const express = require('express');
const server = express();
const cors = require('cors');
const routes = require('./routes');

server.use(routes);
server.use(cors());

const PORT = 3333;
server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running..on Port ${PORT}`);
});