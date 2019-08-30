const express = require('express');
const router = express.Router();
const userController = require('../controllers').userController;
import validations from '../validations/userValidation';

router.post('/register', validations.validateUser, userController.create);
router.post('/login', userController.login);

export default router;