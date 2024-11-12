import { v2 as cloudinary} from "cloudinary"; 
import productmodel from "../models/productmodel.js";
import mongoose from "mongoose";
import productModel from "../models/productmodel.js";


const addProduct = async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try {


        const { name, category, priceOptions, description } = req.body;
        const imageFile = req.file;

        if (!name  || !category || !description || !priceOptions) {
            return res.json({ success: false, message: "Missing Details" });
        }

        

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url


        const productData = {
            name,
            image: imageUrl,
            category,
            priceOptions:JSON.parse(priceOptions),
            description,
        };

        const newProduct = new productmodel(productData);
        const product = await newProduct.save();

        res.json({ success: true, message: 'Product added successfully', product });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


    const allproduct = async (req, res) => {
        try {
            // Add your database fetching logic here
            const products = await productModel.find({}); // Assuming `productModel` is your Mongoose model
            res.json({success:true,products})
        } catch (error) {
            console.log( error);
            res.json({ success:false,message:error.message });
        }
    };

    const removeProduct = async (req, res) => {
        try {
            const { id: productId } = req.body;
    
            // Log the received ID
            console.log("Received productId:", productId);
    
            // Validate the productId format
            if (!mongoose.Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ success: false, message: "Invalid product ID format" });
            }
    
            // Proceed with deletion
            const deletedProduct = await productmodel.findByIdAndDelete(productId);
    
            if (!deletedProduct) {
                return res.status(404).json({ success: false, message: "Product not found or already deleted" });
            }
    
            res.json({ success: true, message: 'Product removed successfully', product: deletedProduct });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error.message });
        }
    };
    

    



export { addProduct,allproduct,removeProduct };
