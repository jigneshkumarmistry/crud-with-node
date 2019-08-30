const express = require('express');
const userController = require('../controllers').userController;
import { verifyToken } from '../config/auth';

const routes = express.Router();

// all route for users
routes.get('/users', verifyToken, userController.getAll);
routes.get('/users/:id', verifyToken, userController.getById);
routes.put('/users/:id', verifyToken, userController.update);
routes.delete('/users/:id', verifyToken, userController.deleteById);

export default routes;
