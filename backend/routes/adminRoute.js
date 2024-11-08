import express from 'express';
import { addProduct } from '../controllers/adminController.js';
import { usersignup } from '../controllers/userController.js';
// import upload from '../middleware/multer.js';

const adminRoute = express.Router();

// Use `adminRoute` instead of `router`
adminRoute.post('/addProduct', addProduct);
adminRoute.post('/signup', usersignup);

export default adminRoute;
