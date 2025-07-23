const mongoose = require("mongoose");

const PartnerLogoSchema = new mongoose.Schema({
  imageUrl: String,
  type: {
    type: String,
    enum: ["general", "event"],
    default: "general",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PartnerLogo", PartnerLogoSchema);