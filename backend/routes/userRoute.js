// userRoute.js
import express from 'express';
import { usersignup ,loginUser} from '../controllers/userController.js';

const userRoute = express.Router();
userRoute.post('/signup', usersignup);
userRoute.post('/login', loginUser);

export default userRoute;
