const express = require('express');
const server = express();
const cors = require('cors');
const routes = require('./routes');


require('./database/connection');

server.use(express.json());
server.use(routes);
server.use(cors());

const PORT = 3333;
server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running..on Port ${PORT}`);
});