import {Router} from 'express';
import StudentController from '@controllers/StudentController';

const routes = Router();

routes.get('/student',StudentController.index);

routes.get('/student/:id',StudentController.show);

routes.post('/student',StudentController.create);

routes.delete('/student/:id',StudentController.deleteStudent);

routes.put('/student/:id',StudentController.update);

export default routes;