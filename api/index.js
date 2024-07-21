import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
const DB_URI =
  process.env.MONGO_URL || "mongodb://localhost:27017/Online-Judge"; // Use environment variable or default

// Middleware to parse JSON
app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

startServer();
