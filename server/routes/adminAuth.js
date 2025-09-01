const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const { loginAdmin, logoutAdmin } = require('../controllers/authController');
const db = require('../config/db');

router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);

router.post('/seed', async (req, res) => {
  try {
    const username = req.body.username || "admin";
    const email = req.body.email || "admin@example.com";
    const password = req.body.password || "admin123";

    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM admins WHERE username=? OR email=? LIMIT 1', [username, email]);
    if (rows.length) return res.status(400).send("Admin already exists");

    const hashed = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO admins (username, email, password) VALUES (?, ?, ?)', [username, email, hashed]);
    res.send("Admin created");
  } catch (err) {
    console.error("Seed Admin Error:", err.message);
    res.status(500).send("Error creating admin");
  }
});

module.exports = router;
