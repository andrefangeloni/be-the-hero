const express = require('express');

const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
