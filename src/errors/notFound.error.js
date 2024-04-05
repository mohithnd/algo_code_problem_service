const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      `The Requested Resource: ${resourceName} With Value ${resourceValue} NOT Found`,
      {
        resourceName,
        resourceValue,
      }
    );
  }
}

module.exports = NotFound;
