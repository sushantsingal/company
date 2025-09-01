const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const db = require('./config/db');
const contactRoutes = require('./routes/contactRoute');
const registerRoutes = require('./routes/registerRoute');
const portfolioRoutes = require('./routes/portfolioRoute');
const adminRoutes = require('./routes/adminAuth');
const partnerRoutes = require('./routes/partner');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://marketing-crawlers.vercel.app",
  // "https://marketing-crawlers.onrender.com", // optional if you want Render frontend to still work
];

// Global Middleware
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("❌ Blocked by CORS:", origin);
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
app.use("/api/contacts", contactRoutes);
app.use("/api/registers", registerRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running 🚀" });
});


// MongoDB Connection

// Start server after DB is ready
// (async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   } catch (err) {
//     console.error("DB connection failed:", err.message);
//     process.exit(1);
//   }
// })

(async () => {
  try {
    const pool = await db();
    await pool.query("SELECT 1"); // test query
    console.log("✅ MySQL connected successfully");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ MySQL connection failed:", err);
  }
})();