import express from 'express';
const routes = express.Router();
import { defaultcontroller } from '../controller/portcontroller.js';
import { signup } from '../controller/signupcontroller.js';
import { signin } from '../controller/signincontroller.js';

routes.get('/',defaultcontroller);

routes.post('/signup',signup);
routes.post('/signin',signin);

export default routes;