const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
