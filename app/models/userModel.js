import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  isOauth: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: function () {
      return !this.get("isOauth"); // ✅ Corrected
    },
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgotPasswordToken: {
    type: String,
    default: null
  },
  forgotPasswordTokenExpiry: {
    type: Date,
    default: null
  },
  verifyToken: {
    type: String,
    default: null
  },
  verifyTokenExpiry: {
    type: Date,
    default: null
  },
});

const User = mongoose.models?.users || mongoose.model("users", userSchema);
export default User;