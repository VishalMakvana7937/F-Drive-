const express = require('express');
const routes = express();
const controllers = require('../controllers/admin_controllers');
const malter = require('../middleware/malter.js');
const passport = require('../middleware/passport.js');
const authenticateuser = require('../middleware/authenticatuser.js')

routes.get('/', authenticateuser, controllers.defaultcontroller);

routes.get('/allblog', controllers.Allblogcontroller);

routes.get('/Signin', controllers.signincontroller);
routes.get('/Signup', controllers.signupcontroller);
routes.post('/Signupuser', controllers.signupaddcontroller);
routes.post('/Signinuser', passport.authenticate('local', { failureRedirect: '/Signin', successRedirect: '/' }));
routes.get('/Logoutadmin', controllers.logoutaddcontroller);

routes.get('/Form', controllers.formaddcontroller);
routes.get('/Table', controllers.tablecontroller);
routes.get('/deletbloger/:id', controllers.deletcontroller);
routes.post('/blogdetail', malter.single('avatar'), controllers.blogdetailadd);


routes.get('/Editblog/:id',controllers.aditblog);
routes.post('/Editblog/:id', controllers.editblogcontroller);

routes.get('/Profile', controllers.profilecontroller);
routes.post('/Profileedit', controllers.profileeditcontroller);
routes.get('/Profileedit', controllers.profileeditcontroller1);

routes.get('/Changepassword', controllers.changepasswordcontroller1);
routes.post('/Changepassword', controllers.changepacontroller1);

routes.get('/Type', controllers.typescontroller);
routes.post('/Type', controllers.typecontroller);

routes.get('/Fogetnewpass',controllers.fogetnewpassword);
routes.post('/Fogetnewpass',controllers.fogenewpassword);

routes.get('/Otp',controllers.otp);
routes.post('/Otp',controllers.otpp);

routes.get('/changenpass',controllers.chngennewpass1);
routes.post('/changenpass',controllers.changenewpasscontroller);

module.exports = routes;