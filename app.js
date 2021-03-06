require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./db/connectDB");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// route
const ProductRoute = require("./routes/Product");
const StoreRoute = require("./routes/Store");
// middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per 'window' in 15 minutes
  })
);
app.use(express.json());
app.use(express.static("./public"));
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads",
  })
);
// route
app.use("/api/v1/products", ProductRoute);
app.use("/api/v1/stores", StoreRoute);
app.get("/", (req, res) => {
  res.send("Welcome page");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
