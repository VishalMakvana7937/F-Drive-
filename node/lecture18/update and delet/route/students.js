import express from 'express';
const studentroute = express.Router();
import { defaultcontroller, poststudent, getstudent, putstudent, deletestudent } from '../controller/studentcontroller.js';

studentroute.get('/student', defaultcontroller);
studentroute.post('/student', poststudent);
studentroute.get('/student/:id', getstudent);
studentroute.put('/student/:id', putstudent);
studentroute.delete('/student/:id', deletestudent);
export default studentroute;