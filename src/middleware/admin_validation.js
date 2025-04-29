"use strict";
const user = require("../models/user");

const adminValidation = async (req, res, next) => {
    try {
        const { email } = req.params;

        // Check if the user exists
        const User = await user.findOne({ email });
        if (!User) {
            return res.status(401).json({ message: "User not found" });
        }

        // Check if the user has the "admin" role
        if (User.role === "admin") {
            return next();
        } else {
            return res.status(403).json({ message: "Access denied" });
        }
    } catch (err) {
        console.error("Middleware error:", err);
        return res.status(500).json({ message: "Problem with middleware" });
    }
};

module.exports = adminValidation;