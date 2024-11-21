import express from 'express';
const adminsRoute = express.Router();
import { admincreate, adminRegister, defaultadmin } from '../controller/admincontroller.js';
import { auth } from '../middleware/auth.js';

adminsRoute.get('/', auth, defaultadmin);
adminsRoute.post('/admin', admincreate);
adminsRoute.post('/adminregister', adminRegister);

export default adminsRoute;