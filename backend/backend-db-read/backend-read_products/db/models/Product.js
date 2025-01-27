import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
});

const Product =
  mongoose.models.Joke || mongoose.model("Product", productSchema);

export default Product;
