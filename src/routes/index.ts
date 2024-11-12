import { Router } from 'express';
import { contactRouter } from './contact.route';

const routes: Router = Router();

routes.use('/contacts', contactRouter);

export { routes }