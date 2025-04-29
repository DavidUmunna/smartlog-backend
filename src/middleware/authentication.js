"use strict";
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
    try {
        const authheaders = req.headers.authorization;

        // Check if the Authorization header exists and starts with "Bearer"
        if (!authheaders || !authheaders.startsWith("Bearer")) {
            return res.status(401).json({
                authenticated: false,
                message: "No token provided",
            });
        }

        // Extract the token from the Authorization header
        const token = authheaders.split(" ")[1];
        console.log("Token:", token);

        // Verify the token
        const secretKey = "pedro123"; // Replace with process.env.JWT_SECRET in production
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    authenticated: false,
                    message: "Invalid token",
                });
            }

            // Attach the decoded token to the request object
            req.user = decoded;
            console.log("Decoded token:", decoded);
            next();
        });
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        res.clearCookie("authToken");
        return res.status(401).json({
            authenticated: false,
            message: "Invalid or expired token",
        });
    }
};

module.exports = authentication;