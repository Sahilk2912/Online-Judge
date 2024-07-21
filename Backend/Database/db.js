const mongoose = require("mongoose");
require("dotenv").config();

const DBConnection = async () => {
  const MONGO_URI = process.env.MONGO_URL;

  if (!MONGO_URI) {
    console.error("MongoDB URI is not defined in environment variables.");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
     // Recommended option for avoiding deprecation warnings
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database:", error.message);
  }
};

module.exports = { DBConnection };
