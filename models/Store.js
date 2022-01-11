const mongoose = require("mongoose");
const StoreSchema = new mongoose.Schema({
  store_name: {
    type: String,
    required: [true, "Please provide store name"],
  },
  location: {
    type: String,
    required: [true, "Please provide store location"],
  },
  sum: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Store", StoreSchema);
