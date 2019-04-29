import express from 'express';
import  UserController from './../controllers/userController';
import UserValidation from '../middlewares/userValidation'

const router = express.Router();


router.route('/auth/signup')
.post(UserValidation.signupValidator, UserController.signup);

router.route('/auth/signin')
.post(UserValidation.loginValidator, UserController.login);







export default router;