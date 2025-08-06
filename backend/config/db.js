const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Load .env variables
dotenv.config({ path: __dirname + "/../.env" });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
