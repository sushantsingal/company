const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../config/db');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Create portfolio
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, link, date, author, category, comments, tags } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const pool = await db();
    await pool.query(
      'INSERT INTO portfolios (title, description, image, link, date, author, category, comments, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [title, description || null, imagePath, link || null, date || null, author || null, category || null, comments || null, Array.isArray(tags) ? tags.join(",") : (tags || null)]
    );
    res.status(201).json({ message: 'Portfolio created' });
  } catch (err) {
    console.error('Portfolio create error:', err);
    res.status(500).json({ error: 'Server error while creating portfolio' });
  }
});

// Get all portfolios
router.get('/', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM portfolios ORDER BY id DESC');
    // Convert tags back to array if needed
    rows.forEach(r => { if (r.tags) r.tags = r.tags.split(','); });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get single portfolio by ID
router.get('/:id', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM portfolios WHERE id=?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    // Convert tags back to array if needed
    if (rows[0].tags) rows[0].tags = rows[0].tags.split(',');

    res.json(rows[0]);
  } catch (err) {
    console.error('Error fetching portfolio by ID:', err);
    res.status(500).json({ error: 'Server error while fetching portfolio' });
  }
});

// Update portfolio
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, link, date, author, category, comments, tags } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
    const fields = [];
    const values = [];

    if (title !== undefined) { fields.push('title=?'); values.push(title); }
    if (description !== undefined) { fields.push('description=?'); values.push(description); }
    if (imagePath) { fields.push('image=?'); values.push(imagePath); }
    if (link !== undefined) { fields.push('link=?'); values.push(link); }
    if (date !== undefined) { fields.push('date=?'); values.push(date); }
    if (author !== undefined) { fields.push('author=?'); values.push(author); }
    if (category !== undefined) { fields.push('category=?'); values.push(category); }
    if (comments !== undefined) { fields.push('comments=?'); values.push(comments); }
    if (tags !== undefined) { fields.push('tags=?'); values.push(Array.isArray(tags) ? tags.join(",") : tags); }

    if (!fields.length) return res.status(400).json({ error: 'No fields to update' });
    values.push(req.params.id);

    const pool = await db();
    const [result] = await pool.query(`UPDATE portfolios SET ${fields.join(', ')} WHERE id=?`, values);
    if (!result.affectedRows) return res.status(404).json({ error: 'Portfolio not found' });
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error('Update failed:', err);
    res.status(500).json({ error: 'Server error while updating portfolio' });
  }
});

// Delete portfolio
router.delete('/:id', async (req, res) => {
  try {
    const pool = await db();
    const [result] = await pool.query('DELETE FROM portfolios WHERE id=?', [req.params.id]);
    if (!result.affectedRows) return res.status(404).json({ error: 'Portfolio not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
