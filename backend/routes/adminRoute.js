// routes/adminroute.js
import express from 'express';
import { addProduct } from '../controllers/adminController.js';
import { usersignup } from '../controllers/userController.js';
// import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/addProduct', addProduct);
router.post('/signup', usersignup)

export default router;
