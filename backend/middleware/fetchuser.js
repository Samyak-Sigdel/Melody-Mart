import jwt from "jsonwebtoken"

const fetchUser = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Authentication token missing or invalid" });
        }

        const token = authHeader.split(" ")[1];
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded User ID:", decodedData.id); // Debug log
        req.user = decodedData; // Attach full decoded data
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export default fetchUser;
