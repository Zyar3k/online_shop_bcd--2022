import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  tag: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model("Product", Product);
