const express = require('express');
const router = express.Router();
const db = require('../config/db');
const transporter = require('../config/mailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, city, phone } = req.body;
    if (!name || !email || !city) {
      return res.status(400).json({ error: 'Name, email, and city are required' });
    }
    const pool = await db();
    const [result] = await pool.query(
      'INSERT INTO registers (name, email,phone,city) VALUES (?, ?, ?, ?)',
      [name, email, phone, city]
    );
    // ✅ Send email to admin
    await transporter.sendMail({
      from: `"Website Registeration Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // only goes to admin
      subject: "📩 New Registration Request on Marketing Crawlers",
      html: `
        <h2>New Registration Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: 'Registration message saved & emailed to admin ✅',
      id: result.insertId
    });
  } catch (error) {
    console.error('Register POST error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM registers ORDER BY createdAt DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pool = await db();
    const [result] = await pool.query('DELETE FROM registers WHERE id=?', [req.params.id]);
    if (!result.affectedRows) return res.status(404).json({ message: 'Register not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting register' });
  }
});

module.exports = router;
