const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Register', registerSchema);