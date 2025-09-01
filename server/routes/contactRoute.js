const express = require('express');
const router = express.Router();
const connectDB = require('../config/db'); // your promise-based db.js

// Create a new contact
router.post('/', async (req, res) => {
  // console.log("📥 Incoming Contact Request:", req.body);
  try {
    const { name, email, message, phone, company } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const pool = await connectDB();
    const [result] = await pool.query(
      'INSERT INTO contacts (name, email, message, phone, company) VALUES (?, ?, ?, ?, ?)',
      [name, email, message, phone || null, company || null]
    );

    res.status(201).json({ 
      success: true, 
      message: 'Contact message sent successfully ✅', 
      id: result.insertId 
    });
  } catch (error) {
    console.error('Contact POST error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const pool = await connectDB();
    const [rows] = await pool.query('SELECT * FROM contacts');
    res.json(rows);
  } catch (err) {
    console.error('Get contacts error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const pool = await connectDB();
    const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Contact not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('Get contact by ID error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, email, message, phone, company } = req.body;
    const pool = await connectDB();

    const [result] = await pool.query(
      'UPDATE contacts SET name=?, email=?, message=?, phone=?, company=? WHERE id=?',
      [name, email, message, phone || null, company || null, req.params.id]
    );

    if (!result.affectedRows) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Updated successfully ✅' });
  } catch (err) {
    console.error('Update contact error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const pool = await connectDB();
    const [result] = await pool.query('DELETE FROM contacts WHERE id=?', [req.params.id]);

    if (!result.affectedRows) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Deleted successfully ✅' });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
