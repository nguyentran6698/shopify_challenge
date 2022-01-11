const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const CustomError = require("../errors");
const uploadImage = async (req, res) => {
  console.log(req.files);
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
  console.log(productImage);
  const result = await cloudinary.uploader.upload(productImage.tempFilePath, {
    user_filename: true,
    folder: "shopify_challenge",
  });
  console.log(result);
  fs.unlinkSync(productImage.tempFilePath);
  res.status(200).json({ image: { src: result.secure_url } });
};

module.exports = uploadImage;
