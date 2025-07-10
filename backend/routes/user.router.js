import express from 'express';
import * as userController from '../controller/user.controller.js';

const router = express.Router();

router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/forget-password", userController.forgetPassword);


export default router;
