import express from 'express';
import { adminlogin,manageTeacher ,manageStudent,adminsignup} from '../controller/admincontroller.js';

const adminsRoute = express.Router();


adminsRoute.post('/admin/login', adminlogin);
adminsRoute.post('/admin/signup', adminsignup);
adminsRoute.get('/manage/teacher', manageTeacher);
adminsRoute.get('/manage/student', manageStudent);

export default adminsRoute;
