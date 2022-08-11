const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shiran:p4u3bdVush8ucbBP@cluster0.bhzmeyi.mongodb.net/SBB?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {connect};