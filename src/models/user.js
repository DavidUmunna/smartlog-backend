"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    role: { type: String, enum: ['admin', 'staff'], default: "staff" },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
