import express from "express"
import { Request, Response } from "express"
import user from "../models/user"
import bcrypt from "bcrypt"

const router=express.Router()

router.get("/",async(req, res)=>{
    try{
        const User=await user.findById(req?.query.id)
        User ? res.status(200).json(User) : res.status(404).json({ message: "User not found" });

    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
});



router.post("/create-user", async (req:Request, res:Response) => {
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
});

export default router