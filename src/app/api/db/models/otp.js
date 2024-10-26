import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // Set OTP expiry time (300 seconds = 5 minutes)
  },
});

export const OTP = mongoose.models.OTP || mongoose.model("OTP", otpSchema);
