import express from "express"
import authenticate from "../middleware/authenticate.js";

import { addtocart } from "../controllers/cartController.js";



const cartRoute = express.Router();

cartRoute.post('/addtocart',authenticate,addtocart);
// cartRoute.get('/getcart',getcart);
// cartRoute.post('/removefromcart',removefromcart);

export default cartRoute;