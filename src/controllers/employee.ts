import express,{Request,Response} from "express"
import user from "../models/user"
import bcrypt from "bcrypt"
import { promises } from "dns"
//const router=express.Router()




export const   getusers=async(req:express.Request,res:express.Response):Promise<any>=>{
    try{
        const email=req.params.id
        const User=await user.findById({email:email})
        User ? res.status(200).json(User) : res.status(404).json({ message: "User not found" });


    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
}

export const updateuser=async(req:Request,res:Response):Promise<any>=>{
    try{
        const email=req.params.id
        const {password}=req.body
        const User=user.findOneAndUpdate({email:email},{password:password})


        if (!User){
            res.status(401).json({message:"usr does not exist"})
        }
        return res.status(201).json({message:"user password updated successfully"})
        

    }catch(err){
        console.error("server error",err)
        res.status(501).json({message:"server error"})
    }

}

