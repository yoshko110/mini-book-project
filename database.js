const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DP_LIMK);
    console.log("DB connected");
  } catch (error) {
    console.log("connected to the DB", error);
  }
};
module.exports = connectDb;
