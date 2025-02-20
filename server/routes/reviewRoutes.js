const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://<anuragch2620>:<anuragchdb2620>@MyCluster.mongodb.net/Review", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema & Model
const ReviewSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);

// API Route to Save Data
app.post("/api/reviews", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newReview = new Review({ username, password });
    await newReview.save();
    res.status(201).json({ message: "Login details saved!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
