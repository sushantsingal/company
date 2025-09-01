const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../config/db');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/partners/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post('/upload', upload.single('logo'), async (req, res) => {
  try {
    const imageUrl = `/uploads/partners/${req.file.filename}`;
    const type = req.body.type || 'general';
    const pool = await db();
    await pool.query('INSERT INTO partner_logos (imageUrl, type) VALUES (?, ?)', [imageUrl, type]);
    res.json({ imageUrl, type });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error uploading logo' });
  }
});

router.get('/', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM partner_logos ORDER BY createdAt DESC');
    const generalPartners = rows.filter(p => p.type === 'general');
    const eventPartners = rows.filter(p => p.type === 'event');
    res.json({ generalPartners, eventPartners });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pool = await db();
    await pool.query('DELETE FROM partner_logos WHERE id=?', [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting logo' });
  }
});

module.exports = router;
