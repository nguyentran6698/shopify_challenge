const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name of the product"],
      trim: true,
    },
    manufacture: {
      type: String,
      required: [true, "Please provide name of the manufacture"],
      // can add list of products manufacture in here
      trim: true,
    },
    product_type: {
      type: String,
      required: [true, "Please provide type of the product"],
    },
    product_desc: {
      type: String,
    },
    product_img: {
      type: String,
      default: "some default image",
    },
    store: {
      type: mongoose.Types.ObjectId,
      required: [true, "please provide store "],
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: { createdAt: "created_Date " } }
);

module.exports = mongoose.model("Product", ProductSchema);
