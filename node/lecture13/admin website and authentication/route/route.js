const express = require('express');
const routes = express();
const controllers = require('../controllers/admin_controllers')

routes.get('/', controllers.defaultcontroller);
routes.get('/charte',controllers.chartecontroller);
routes.get('/Signin',controllers.signincontroller);
routes.get('/Signup',controllers.signupcontroller);
routes.post('/Signupuser',controllers.signupaddcontroller);
routes.post('/Signinuser',controllers.signinaddcontroller);
routes.get('/Logoutadmin',controllers.logoutaddcontroller);
routes.get('/Form',controllers.formaddcontroller);

module.exports = routes;