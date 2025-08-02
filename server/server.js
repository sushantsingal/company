const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoute');
const registerRoutes = require('./routes/registerRoute');
const portfolioRoutes = require('./routes/portfolioRoute');
const partnerRoutes = require('./routes/partner');
const adminRoutes = require('./routes/adminAuth');
const fs = require('fs');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://marketing-crawlers.vercel.app",
  "https://marketing-crawlers.onrender.com", // optional if you want Render frontend to still work
];

const folders = ["uploads", "uploads/partners"];
folders.forEach((folder) => {
  const fullPath = path.join(__dirname, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Global Middleware
app.use(cors({
  origin: function (origin, callback) {
    console.log("Request Origin:", origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
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

// Routes
app.use("/api/partners", partnerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is working...");
});

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
