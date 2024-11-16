import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";

const usersignup = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        // Check required fields
        if (!username || !password || !email) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        // Validate password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long' });
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new userModel({ username, email, password: hashedPassword });
        await newUser.save();

        // Generate token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong, please try again' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        // Find user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User does not exist' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong, please try again' });
    }
};

export { usersignup, loginUser };
