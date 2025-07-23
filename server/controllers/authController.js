const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

// Login admin
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
    console.log("heklo");
    const admin = await Admin.findOne({ username });
    console.log(admin);
    const isMatch = await bcrypt.compare(password, admin.password);
    console.log(isMatch);

    if (!admin || !isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, username: admin.username });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Logout (optional - handled client-side mostly)
exports.logoutAdmin = async (req, res) => {
  res.status(200).json({ message: "Logged out" });
};