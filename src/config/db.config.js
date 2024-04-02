const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(MONGO_URI + "_" + NODE_ENV);
    } else {
      await mongoose.connect(MONGO_URI);
    }
  } catch (error) {
    console.log("Unable To Connect To The DB Server");
    console.log(error);
  }
}

module.exports = connectToDB;
