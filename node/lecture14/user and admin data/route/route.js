const express = require('express');
const routes = express();
const controllers = require('../controllers/admin_controllers');
const malter = require('../middleware/malter.js');

routes.get('/', controllers.defaultcontroller);

routes.get('/charte', controllers.chartecontroller);

routes.get('/Signin', controllers.signincontroller);

routes.get('/Signup', controllers.signupcontroller);

routes.post('/Signupuser', controllers.signupaddcontroller);

routes.post('/Signinuser', controllers.signinaddcontroller);

routes.get('/Logoutadmin', controllers.logoutaddcontroller);

routes.get('/Form', controllers.formaddcontroller);

routes.get('/Table', controllers.tablecontroller);

routes.get('/deletbloger/:id', controllers.deletcontroller);

// routes.get('/blogdetail', malter.single('avatar'), controllers.blogdetailadd);

routes.post('/blogdetail', malter.single('avatar'), controllers.blogdetailadd);

routes.get('/Profile', controllers.profilecontroller);

routes.post('/Profileedit', controllers.profileeditcontroller);

routes.get('/Profileedit', controllers.profileeditcontroller1);

routes.get('/Changepassword', controllers.changepasswordcontroller1);

routes.post('/Changepassword', controllers.changepacontroller1);

routes.get('/Type', controllers.typescontroller);

routes.post('/Type', controllers.typecontroller);


module.exports = routes;