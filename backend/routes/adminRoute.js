import express from 'express';
import { addProduct, allproduct, removeProduct } from '../controllers/adminController.js';
import { usersignup } from '../controllers/userController.js';
import upload from '../middleware/multer.js'; // Uncommented the multer import

const adminRoute = express.Router();

// Use `upload.single('imageFile')` to handle single file upload in the `/addProduct` route
adminRoute.post('/addProduct', upload.single('imageFile'), addProduct);
adminRoute.get('/allproduct',allproduct);
adminRoute.post('/removeproduct',removeProduct);


export default adminRoute;
