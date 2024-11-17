import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, "your_secret_key"); // Replace with your secret key
        req.user = decoded; // Add user info to req.user
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authenticate;
