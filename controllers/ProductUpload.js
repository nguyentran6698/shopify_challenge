const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const CustomError = require("../errors");
const { Product } = require("../models");
const uploadImage = async (req, res) => {
  const { productID } = req.query;
  console.log(productID);
  if (!req.files) {
    throw new CustomError.BadRequest("No file being detected");
  }
  const maxSize = 1024 * 1024;
  if (req.files.size > maxSize) {
    throw new CustomError.BadRequest(
      "File upload exceeds the maximum requirement"
    );
  }
  if (!req.files.image.mimetype.startsWith("image")) {
    throw new CustomError.BadRequest("Please upload the image file");
  }
  const productImage = req.files.image;
  const result = await cloudinary.uploader.upload(productImage.tempFilePath, {
    user_filename: true,
    folder: "shopify_challenge",
    eager: { width: 200, height: 200, crop: "thumb" },
  });
  const { secure_url: imageUpload } = result;
  const { secure_url: thumbNail } = result.eager[0];
  fs.unlinkSync(productImage.tempFilePath);
  const image = {
    src: { imageUpload, thumbNail },
  };
  await Product.findByIdAndUpdate({ _id: productID }, { image });
  res.status(200).json({ image });
};

module.exports = uploadImage;
