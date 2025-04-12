"use strict";
const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getusers = async (req, res) => {
    try {
        const User = await user.findById(req?.query?.id);
        User
            ? res.status(200).json(User)
            : res.status(404).json({ message: "User not found" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
};

const createusers = async (req, res) => {
    try {
        const { email, password, firstname, lastname, phoneNumber, role } = req.body;

        // Validate input
        if (!email || !password || !firstname || !lastname || !phoneNumber || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check for duplicate email
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new user({
            email,
            password: hashedPassword,
            firstname,
            lastname,
            phoneNumber,
            role,
            createdAt: new Date(),
        });

        console.log(newUser);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error: User not created" });
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if the user exists
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the provided password with the stored hashed password
        if (!existingUser.password) {
            return res.status(500).json({ message: "Password is missing for the user" });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email, role: existingUser.role },
            process.env.JWT_SECRET || "your_jwt_secret", // Replace with your actual secret
            { expiresIn: "1h" }
        );

        // Respond with the token and user details
        res.status(200).json({
            message: "Sign-in successful",
            token,
            user: {
                id: existingUser._id,
                email: existingUser.email,
                firstname: existingUser.firstName,
                lastname: existingUser.lastName,
                role: existingUser.role,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during sign-in" });
    }
};

// Export the functions
module.exports = {
    getusers,
    createusers,
    signin,
};