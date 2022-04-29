
const mongoose = require("mongoose");

// connect the DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI_Mongo);
    console.log('DB are Connected On MongoDB');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

