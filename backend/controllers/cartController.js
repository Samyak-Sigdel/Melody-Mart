import productmodel from "../models/productmodel.js";
import usermodel from "../models/usermodel.js";

const addtocart = async (req, res) => {
    try {
       
        const userId = req.user.id; // From fetchUser middleware
        const { productId, selectedPriceOption, quantity } = req.body;

        // Validate request body
        if (!productId || !selectedPriceOption || !selectedPriceOption.duration || !selectedPriceOption.price || !quantity) {
            return res.status(400).json({ success: false, message: "All fields are required: productId, selectedPriceOption, and quantity." });
        }

        // Check if the product exists
        const product = await productmodel.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }

        // Validate selectedPriceOption
        const validPriceOption = product.priceOptions.find(
            (option) =>
                option.duration === selectedPriceOption.duration && option.price === selectedPriceOption.price
        );

        if (!validPriceOption) {
            return res.status(400).json({ success: false, message: "Invalid price option selected." });
        }

        console.log("User ID from Token:", userId); // Debugging log

        // Find the user
        const user = await usermodel.findById(userId);
        if (!user) {
            console.error(`User not found: ${userId}`); // More detailed error
            return res.status(404).json({ success: false, message: `User not found with ID ${userId}.` });
        }
        // Check if the product already exists in the cart
        const cartItemIndex = user.cart.findIndex((item) => item.product.toString() === productId);

        if (cartItemIndex > -1) {
            // Update existing cart item
            user.cart[cartItemIndex].quantity += quantity;
            user.cart[cartItemIndex].selectedPriceOption = selectedPriceOption;
        } else {
            // Add new cart item
            user.cart.push({
                product: productId,
                selectedPriceOption,
                quantity,
            });
        }

        // Save updated user cart
        await user.save();

        res.status(200).json({ success: true, message: "Product added to cart successfully.", cart: user.cart });
    } catch (error) {
        console.error("Error in addtocart:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};


const removefromcart = async (req, res) => {
    try {
        const userId = req.user.id; 
        const { productId } = req.body;

       
        console.log("User ID:", userId);
        console.log("Request Body:", req.body);

      
        if (!productId) {
            console.error("Product ID is missing in the request.");
            return res.status(400).json({
                success: false,
                message: "Product ID is required to remove an item from the cart.",
            });
        }

        // Find the user in the database
        const user = await usermodel.findById(userId);
        console.log("User Document:", user); // Log user details

        if (!user) {
            console.error("User not found with ID:", userId);
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Check if the product exists in the user's cart
        const cartItemIndex = user.cart.findIndex(
            (item) => item.product.toString() === productId
        );

        console.log("Cart Item Index:", cartItemIndex); // Log cart index

        if (cartItemIndex === -1) {
            console.error("Product not found in user's cart:", productId);
            return res.status(404).json({
                success: false,
                message: "Product not found in the user's cart.",
            });
        }

        // Remove the product from the cart
        user.cart.splice(cartItemIndex, 1);

        // Save the updated cart
        await user.save();
        console.log("Updated Cart:", user.cart);

        res.status(200).json({
            success: true,
            message: "Product removed from cart successfully.",
            cart: user.cart,
        });
    } catch (error) {
        console.error("Error in removefromcart:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

const getCart = async (req, res) => {
    try {
        console.log("Request User Object:", req.user); // Debug log
        if (!req.user || !req.user.id) {
            return res.status(400).json({ success: false, message: "User ID is missing." });
        }

        const userId = req.user.id; // Fetch user ID
        console.log("User ID:", userId); // Debug log

        const user = await usermodel.findById(userId).populate("cart.product");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        res.status(200).json({
            success: true,
            message: "Cart retrieved successfully.",
            cart: user.cart,
        });
    } catch (error) {
        console.error("Error in getCart:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};


export { addtocart,removefromcart ,getCart};
