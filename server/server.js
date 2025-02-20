const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config.env" });
const FormData = require("./models/FormData");

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(bodyParser.json());

// ✅ CORS Setup (Allow only frontend URL)
const corsOptions = {
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is missing in .env file!");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// ✅ API Route to save form data
app.post("/api/form", async (req, res) => {
  try {
    const { email, password } = req.body; // Adjusted to match frontend form
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newFormData = new FormData({ email, password });
    await newFormData.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving form data:", error);
    res.status(500).json({ message: "Error saving form data", error });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
