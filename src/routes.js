const express = require('express');
const routes = express.Router();

const formController = require('./controllers/formController');

routes.post(formController.store)


module.exports = routes;
