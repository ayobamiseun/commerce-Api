const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300 // OTP expires in 5 minutes (300 seconds)
  }
});

const Otps = mongoose.model("otps", otpSchema);

module.exports = Otps;