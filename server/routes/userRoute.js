const express = require('express');

const router = express.Router();
const userController = require('../controllers').userController;
import validations from '../validations/userValidation';

// all route for users
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', validations.validateUser, userController.create);
router.put('/users/:id', validations.validateUser, userController.update);
router.delete('/users/:id', userController.deleteById);

export default router;
