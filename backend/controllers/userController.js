import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/usermodel.js';
import jwt from 'jsonwebtoken';

const usersignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Checking for all required fields
        if (!name || !password || !email) {
            return res.status(400).send({ error: 'Please provide all required fields' });
        }

        // Validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        };

        const newUser = new userModel(userData);
        const user = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set expiration if needed

        res.json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


 const loginUser = async (req,res)=>{
        try{

            const {email,password}= req.body 
            const user =await userModel.findOne({email})

            if (!user) {
                res.status(500).json({ success: false, message: 'user does not exist ' });
                
            }

            const isMatch = await bcrypt.compare(password,user.password)

            if (isMatch) {
                const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
                res.json({success:true,token})
            }else{
                res.json({success :false , message : "Invalid credentials"})
            }


        }catch(error){
            console.error(error);
            res.status(500).json({ success: false, message: error.message });

        }
    }





export { usersignup ,loginUser};
