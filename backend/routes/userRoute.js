// userRoute.js
import express from 'express';
import { usersignup } from '../controllers/userController.js';

const userRoute = express.Router();
userRoute.post('/signup', usersignup);

export default userRoute;
