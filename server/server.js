const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const contactRoutes = require('./routes/contactRoute');
const portfolioRoutes = require('./routes/portfolioRoute');
const partnerRoutes = require("./routes/partner");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Global Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(helmet());
app.use(express.json());

// Serve static images
app.use(
  "/uploads",
  express.static("uploads", {
    setHeaders: (res, path, stat) => {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
app.use("/api/partners", partnerRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is working...");
});

// Load Routes
app.use('/api/contact', contactRoutes);
app.use('/api/portfolio', portfolioRoutes);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully ✅");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

connectDB();