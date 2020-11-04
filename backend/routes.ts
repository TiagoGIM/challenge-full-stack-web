import {Router} from 'express';
import StudentController from './src/controllers/StudentController';

const routes = Router();

routes.get('/student',StudentController.index);

routes.get('/student/:id',StudentController.show);

routes.post('/student',StudentController.create);

routes.delete('/student/:id',StudentController.deleteStudent);

routes.put('/student/:id',StudentController.deleteStudent);

export default routes;