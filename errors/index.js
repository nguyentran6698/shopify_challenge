const BadRequest = require("./BadRequest")
const UnAuthorization = require("./Unauthorization")
const NotFound = require("./notFoundError")
const CustomAPIError = require("./customAPIError")


module.exports = {
    BadRequest,
    UnAuthorization,
    NotFound,
    CustomAPIError,
}