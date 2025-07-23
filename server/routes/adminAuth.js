const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const { loginAdmin, logoutAdmin } = require('../controllers/authController');
const Admin = require('../models/Admin');

// @route   POST /api/admin/login
router.post('/login', loginAdmin);

// @route   POST /api/admin/logout
router.post('/logout', logoutAdmin);

// POST/api/admin/seed
router.post('/seed', async (req, res) => {
  try {
    // const email = "admin@example.com";
    // const password = "admin123";
    const email = "test@gmail.com";
    const password = "admin15";

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).send("Admin already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.send("Admin created");
  } catch (err) {
    console.error("Seed Admin Error:", err.message);
    res.status(500).send("Error creating admin");
  }
});

module.exports = router;