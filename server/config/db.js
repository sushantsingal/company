// config/db.js
const mysql = require("mysql2/promise");

let pool;

async function connectDB() {
  if (pool) return pool;

  // Ensure env variables exist
  const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
  } = process.env;

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error("❌ Missing MySQL environment variables. Check .env file!");
  }

  pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS || "",
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  try {
    await bootstrapSchema(pool);
    console.log("✅ MySQL pool initialized & schema ready");
  } catch (err) {
    console.error("❌ MySQL bootstrap error:", err.message);
    throw err;
  }

  return pool;
}

async function bootstrapSchema(pool) {
  const conn = await pool.getConnection();
  try {
    // Contacts table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(64),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Registers table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS registers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        phone VARCHAR(64),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Portfolio table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS portfolios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image VARCHAR(512),
        link VARCHAR(512),
        date VARCHAR(128),
        author VARCHAR(255),
        category VARCHAR(255),
        tags TEXT,
        comments TEXT
      )
    `);

    // Partner logos table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS partner_logos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        imageUrl VARCHAR(512),
        type ENUM('general','event') DEFAULT 'general',
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Admins table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE,
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `);
  } finally {
    conn.release();
  }
}

module.exports = connectDB;
