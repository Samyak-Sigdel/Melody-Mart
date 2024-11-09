import { v2 as cloudinary} from "cloudinary"; 
import productModel from "../models/productmodel.js";




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



        const newProduct = new productModel(productData);
        const product = await newProduct.save();

        res.json({ success:true,message: 'Product added successfully',product});


    } catch (error) {
        console.log( error);
        res.json({ success:false,message:error.message });
    }
};


    const removeproduct = async (res,req)  =>({
        




    })

    const allproduct = async (req, res) => {
        try {
            // Add your database fetching logic here
            const products = await productModel.find(); // Assuming `productModel` is your Mongoose model
    
            res.status(200).send(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send({ error: 'Failed to fetch products' });
        }
    };
    



export { addProduct,allproduct };
