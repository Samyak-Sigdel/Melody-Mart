import mongoose from "mongoose";

const priceOptionSchema = new mongoose.Schema({
    duration: {
      type: String,
      enum: ['Weekly', 'Half-monthly', 'Monthly'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  priceOptions: [priceOptionSchema], // Array of price options
  image: { type: String, required: true }, // Path or URL of the image
  description: { type: String, required: true },
});

const productModel = mongoose.models.product || mongoose.model("Product", productSchema);

export default productModel;
