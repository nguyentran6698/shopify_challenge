const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let errorObject = {
    status: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
  };
  if (err.code === 11000) {
    errorObject["message"] = `Duplicate ${Object.keys(
      err.keyPattern
    )} with value  ${Object.values(err.keyValue)}`;
  }
  if (err.name === "CastError") {
    errorObject["message"] = `No Item found with ID ${err.value}`;
    errorObject["status"] = StatusCodes.NOT_FOUND;
  }
  if (err.name === "ValidationError") {
    errorObject.message = Object.values(err.errors)
      .map((item) => {
        return item.message;
      })
      .join(". ");
  }
  return res.status(errorObject.status).json({ msg: errorObject.message });
  // Debug Purpose
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};
module.exports = errorHandlerMiddleware;
