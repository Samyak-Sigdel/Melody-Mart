import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'
import cartRoute from './routes/cartRoute.js'


//app config 

const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())

//api endpoint 
app.use('/api/admin',adminRoute)
app.use('/api/user',userRoute)
app.use('/api/cart',cartRoute)

//localhost:4000/api/admin



app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(PORT, ()=> console.log("Server Started ",PORT))