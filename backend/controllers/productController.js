import productModel from "../models/productmodel.js";

const newcollection = async (req, res) =>{

    try {
        const products = await productModel.find({}); // Fetch all products
        if (!products.length) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }
        
        const newcollection = products.slice(-8); // Get the last 8 products
        console.log("NewCollection Fetched");
        res.status(200).json({ success: true, data: newcollection });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong, please try again' });
        
    }

}
    
export {newcollection};