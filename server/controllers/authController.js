const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/dbUtil");

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const pool = await db();
    const [rows] = await pool.query('SELECT * FROM admins WHERE username = ? OR email = ? LIMIT 1', [username, username]);
    const admin = rows[0];
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ token, username: admin.username || admin.email });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.logoutAdmin = async (req, res) => {
  res.status(200).json({ message: "Logged out" });
};
