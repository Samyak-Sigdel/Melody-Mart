import express from "express"
import { newcollection } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.get('/newcollection',newcollection);

export default productRoute;