const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name of the product"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Please provide name of the manufacture"],
      trim: true,
    },
    type: {
      type: String,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
      default: "/images/image-not-found.jpg",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "please provide the price of the product"],
    },
    store: [
      {
        type: mongoose.Types.ObjectId,
        required: [true, "please provide store id"],
        ref: "Store",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
