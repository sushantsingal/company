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
  slug: String,
  category: String,
  tags: [String],
  comments: String,
  metaDescription: {
    type: String,
    maxlength: 160,
    trim: true,
  },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
