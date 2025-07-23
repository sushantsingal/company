const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const multer = require('multer');
const path = require('path');

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder to store images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage });

// Create a new project with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newProject = new Portfolio({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      author: req.body.author,
      comments: req.body.comments,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const items = await Portfolio.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Edit a Project
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const updateFields = { title, description };

    if (req.file) {
      updateFields.image = "/uploads/" + req.file.filename;
    }

    const updated = await Portfolio.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "Portfolio not found" });

    res.json(updated);
  } catch (err) {
    console.error("Update failed:", err);
    res.status(500).json({ error: "Server error while updating portfolio" });
  }
});

module.exports = router;