import express from "express"

import fetchUser from "../middleware/fetchuser.js";

import { addtocart, removefromcart } from "../controllers/cartController.js";



const cartRoute = express.Router();

cartRoute.post('/addtocart',fetchUser,addtocart);
cartRoute.post('/removefromcart',removefromcart);
// cartRoute.get('/getcart',getcart);

export default cartRoute;