const express = require('express');
const routes = express.Router();

const formController = require('./controllers/formController');

routes.get('/form', formController.index);
routes.post('/form', formController.store);
routes.delete('/form/:id', formController.delete);
routes.put('/form/:id', formController.update);


module.exports = routes;
