// routes/adminroute.js
import express from 'express';
import { addProduct } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/addProduct', addProduct);

export default router;
