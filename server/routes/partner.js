const express = require("express");
const router = express.Router();
const multer = require("multer");
const PartnerLogo = require("../models/Partner");
const path = require("path");

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/partners/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload logo
router.post("/upload", upload.single("logo"), async (req, res) => {
  const type = req.body.type || "general";
  const imageUrl = `/uploads/partners/${req.file.filename}`;

  const newLogo = new PartnerLogo({ imageUrl, type });
  await newLogo.save();

  res.status(201).json(newLogo);
});

// Get all logos
router.get("/", async (req, res) => {
  const all = await PartnerLogo.find();
  const generalPartners = all.filter(p => p.type === "general");
  const eventPartners = all.filter(p => p.type === "event");

  res.json({ generalPartners, eventPartners });
});

// Delete a logo
router.delete("/:id", async (req, res) => {
  await PartnerLogo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;