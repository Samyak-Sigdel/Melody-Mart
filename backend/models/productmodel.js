import mongoose from "mongoose";

const productSchema = new  mongoose.Schema({
    name:{type:String,required:true},
    id:{ type: Number,required:true,},
    image:{type:String,required:true,},
    category:{type:String,required:true,},
    priceOptions: [
        { duration: {type: String,required: true },
          price: {type: Number, required: true}
        }
      ],
      description: { type: String, trim: true},
})

const productModel = mongoose.models.users ||  mongoose.model("product",productSchema);

export default productModel;