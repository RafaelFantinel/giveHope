const express = require('express');
const OngControler = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

//Rotas de Session
routes.post('/sessions', SessionController.create);

//Rota das ongs
routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

//Cassos de uma ong expecifica
routes.get('/profile', ProfileController.index);

//Rota dos incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;
