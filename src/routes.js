const express = require('express');
const routes = express.Router();

const formController = require('./controllers/formController');

routes.get('/form', formController.index);
routes.post('/form', formController.store);


module.exports = routes;
