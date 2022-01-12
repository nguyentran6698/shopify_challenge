const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name of the product"],
      trim: true,
      unique: [true, "Product already created. Please, use update instead"],
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
ProductSchema.statics.total = async function () {
  console.log("acb");
};
ProductSchema.post("save", async function () {
  await this.constructor.total();
});
ProductSchema.post("update", async function () {
  await this.constructor.total();
});
module.exports = mongoose.model("Product", ProductSchema);
