const express = require('express');

const ONGController = require('./controllers/ONGController');

const routes = express.Router();

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.store);

module.exports = routes;
