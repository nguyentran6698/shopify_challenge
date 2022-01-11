require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./db/connectDB");
// route
const ProductRoute = require("./routes/Product");
const StoreRoute = require("./routes/Store");
// middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(express.static("./public"));
app.use(logger("dev"));

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
