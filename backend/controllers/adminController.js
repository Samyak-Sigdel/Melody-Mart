import { v2 as cloudinary} from "cloudinary"; 
import productmodel from "../models/productmodel.js";




const addProduct = async (req, res) => {
    try {
        const { name, id, category, priceOptions, description } = req.body;
        const imageFile = req.file;


  
        if (!name || !id  || !category || !description || !priceOptions) {
            return res.json({success:false,message:"Missing Details"})
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        
      

        const productData = {
            name,
            id,
            image:imageUrl,
            category,
            priceOptions:JSON.parse(priceOptions),
            description,
            date:Date.now()
        };



        const newProduct = new productmodel(productData);
        const product = await newProduct.save();

        res.json({ success:true,message: 'Product added successfully',product});


    } catch (error) {
        console.log( error);
        res.json({ success:false,message:error.message });
    }
};


    const allproduct = async (req, res) => {
        try {
            // Add your database fetching logic here
            const products = await productmodel.find({}); // Assuming `productModel` is your Mongoose model
            res.json({success:true,products})
        } catch (error) {
            console.log( error);
            res.json({ success:false,message:error.message });
        }
    };


    const removeproduct = async (req, res) => {
        try {
            
            const deletedProduct = await productmodel.findOneAndDelete({id:req.body.id});
    
            if (!deletedProduct) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
    
            res.json({ success: true, message: 'Product removed successfully', product: deletedProduct });
        } catch (error) {
            console.log( error);
            res.json({ success:false,message:error.message });
        }
    };






    



export { addProduct,allproduct,removeproduct };
