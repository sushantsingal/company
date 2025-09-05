const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === "true" || false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASS,
  },
});

// Debug log (remove in production)
console.log("📧 Using mailer config:");
console.log("Host:", process.env.SMTP_HOST || "smtp.gmail.com");
console.log("Port:", process.env.SMTP_PORT || 587);
console.log("Email:", process.env.ADMIN_EMAIL);
console.log("Pass length:", process.env.ADMIN_EMAIL_PASS?.length);

module.exports = transporter;
