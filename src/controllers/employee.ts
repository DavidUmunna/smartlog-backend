import express from "express"
import user from "../models/user"

const router=express.Router()

export const   getusers=async(req,res)=>{
    try{
        const User=await user.findById(req?.query.id)
        User ? res.status(200).json(User) : res.status(404).json({ message: "User not found" });


    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
}

router.post("/:id",async(req,res)=>{
    try{
        const {email,password,firstname,lastname,phoneNumber,role}=req.body()
        const User=new user({email,password,firstname,lastname,phoneNumber,role})
        console.log(User)
        await User.save()
        res.status(201).json(User)
    }catch(err){
        res.status(400).json({ message: "Error User not created" });
        console.error(err)
    }
})

export default router