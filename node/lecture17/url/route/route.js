const express = require('express');
const controllers = require('../controller/controller');
const routes = express();

routes.get('/', controllers.defaultHandler);
routes.post('/', controllers.defaultpost);

module.exports = routes;