const { connectDB } = require('./db');

async function db() {
  return connectDB();
}

module.exports = db;