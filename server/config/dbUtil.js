const connectDB = require("./db");

module.exports = async function db() {
  return await connectDB();
};