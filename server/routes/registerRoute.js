const express = require('express');
const router = express.Router();
const Register = require('../models/Register');

router.post('/', async (req, res) => {
  try {
    const { name, email, city, phone } = req.body;
    if (!name || !email || !city) {
      return res.status(400).json({ error: 'Name, email, and city are required' });
    }

    const newMessage = new Register({ name, email, city, phone });
    await newMessage.save();

    res.status(201).json({ message: 'Registeration sent successfully ✅' });
  } catch (error) {
    console.error("Registeration form error:", error);
    res.status(500).json({ error: 'Something went wrong ❌' });
  }
});

router.get("/", async (req, res) => {
  try {
    const registers = await Register.find().sort({ createdAt: -1 });
    res.json(registers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Register.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact" });
  }
});

module.exports = router;