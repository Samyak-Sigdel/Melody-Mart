import express from "express"

import fetchUser from "../middleware/fetchuser.js";

import { addtocart, getCart, removefromcart } from "../controllers/cartController.js";



const cartRoute = express.Router();

cartRoute.post('/addtocart',fetchUser,addtocart);
cartRoute.post('/removefromcart',fetchUser,removefromcart);
cartRoute.get('/getcart',fetchUser,getCart);

export default cartRoute;