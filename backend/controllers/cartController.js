import productmodel from "../models/productmodel.js";
import usermodel from "../models/usermodel.js";
const addtocart = async (req, res) => {
    try {
        req.user = { id: "mockUserId" }; // Mock user for testing
        const { itemId, duration } = req.body;

        if (!itemId || !duration) {
            throw new Error("Product ID and duration are required");
        }

        // Your existing logic here...

        res.status(200).json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.error("Error in addtocart:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};




export { addtocart };
