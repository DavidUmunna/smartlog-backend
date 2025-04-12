import express,{Request,Response} from "express"
import user from "../models/user"

const router=express.Router()

export const   getusers=async(req:Request,res:Response)=>{
    try{
        const User=await user.findById(req?.query.id)
        User ? res.status(200).json(User) : res.status(404).json({ message: "User not found" });


    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
}

export const signin=async(req:Request,res:Response)=>{
    try{
        
    }catch(err){
        
    }

}



