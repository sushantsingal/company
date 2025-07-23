const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String, 
  link: String, 
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  author: String,
  category: String,
  comments: String,
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
