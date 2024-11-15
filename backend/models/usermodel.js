import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
    required: true,
  },
  selectedPriceOption: {
    duration: {
      type: String,
      enum: ['Weekly', 'Half-monthly', 'Monthly'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
    default: 1, // Default quantity is 1
  },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [cartItemSchema], // Array of cart items
  data :{type:Date,default:Date.now,}
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
