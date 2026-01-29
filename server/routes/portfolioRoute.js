const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../config/db');

/* ===============================
   FEATURED IMAGE STORAGE
================================ */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

/* ===============================
   EDITOR IMAGE STORAGE
================================ */
const editorStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/editor/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const editorUpload = multer({
  storage: editorStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files allowed'), false);
    }
    cb(null, true);
  },
});

/* ===============================
   ✅ EDITOR IMAGE UPLOAD ROUTE
================================ */
router.post('/editor-upload', editorUpload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    res.status(201).json({
      url: `/uploads/editor/${req.file.filename}`,
    });
  } catch (err) {
    console.error('Editor upload error:', err);
    res.status(500).json({ error: 'Editor upload failed' });
  }
});

/* ===============================
   CREATE INSIGHT
================================ */
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, link, date, author, category, slug, metaDescription, comments, tags } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const pool = await db();
    await pool.query(
      `INSERT INTO portfolios 
       (title, description, metaDescription, image, link, date, author, category, slug, comments, tags)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description || null,
        metaDescription || null,
        imagePath,
        link || null,
        date || null,
        author || null,
        slug || null,
        category || null,
        comments || null,
        Array.isArray(tags) ? tags.join(",") : tags || null
      ]
    );

    res.status(201).json({ message: 'Portfolio created' });
  } catch (err) {
    console.error('Portfolio create error:', err);
    res.status(500).json({ error: 'Server error while creating portfolio' });
  }
});

/* ===============================
   GET ALL INSIGHTS
================================ */
router.get('/', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM portfolios ORDER BY id DESC');

    rows.forEach(r => {
      if (r.tags) r.tags = r.tags.split(',');
    });

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   GET SINGLE INSIGHT
================================ */
router.get('/:id', async (req, res) => {
  try {
    const pool = await db();
    const [rows] = await pool.query(
      'SELECT * FROM portfolios WHERE id=?',
      [req.params.id]
    );

    if (!rows.length) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    if (rows[0].tags) rows[0].tags = rows[0].tags.split(',');

    res.json(rows[0]);
  } catch (err) {
    console.error('Fetch by ID error:', err);
    res.status(500).json({ error: 'Server error while fetching portfolio' });
  }
});

/* ===============================
   UPDATE INSIGHT
================================ */
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, link, date, author, category, slug, metaDescription, comments, tags } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const fields = [];
    const values = [];

    if (title !== undefined) { fields.push('title=?'); values.push(title); }
    if (description !== undefined) { fields.push('description=?'); values.push(description); }
    if (metaDescription !== undefined) { fields.push('metaDescription=?'); values.push(metaDescription); }
    if (imagePath) { fields.push('image=?'); values.push(imagePath); }
    if (link !== undefined) { fields.push('link=?'); values.push(link); }
    if (date !== undefined) { fields.push('date=?'); values.push(date); }
    if (author !== undefined) { fields.push('author=?'); values.push(author); }
    if (slug !== undefined) { fields.push('slug=?'); values.push(slug); }
    if (category !== undefined) { fields.push('category=?'); values.push(category); }
    if (comments !== undefined) { fields.push('comments=?'); values.push(comments); }
    if (tags !== undefined) {
      fields.push('tags=?');
      values.push(Array.isArray(tags) ? tags.join(",") : tags);
    }

    if (!fields.length) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    values.push(req.params.id);

    const pool = await db();
    const [result] = await pool.query(
      `UPDATE portfolios SET ${fields.join(', ')} WHERE id=?`,
      values
    );

    if (!result.affectedRows) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error('Update failed:', err);
    res.status(500).json({ error: 'Server error while updating portfolio' });
  }
});

/* ===============================
   DELETE INSIGHT
================================ */
router.delete('/:id', async (req, res) => {
  try {
    const pool = await db();
    const [result] = await pool.query(
      'DELETE FROM portfolios WHERE id=?',
      [req.params.id]
    );

    if (!result.affectedRows) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
