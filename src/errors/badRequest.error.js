const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid Structure For ${propertyName}`,
      details
    );
  }
}

module.exports = BadRequest;
