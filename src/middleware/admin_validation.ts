import express,{Request,Response} from "express"
import user from "../models/user"
import { Interface } from "readline"
const router=express.Router()


declare global{
    namespace express{
        interface Request{
            User:any
        }
    }
}


router.use(async (req:Request,res:Response,next):Promise<any>=>{
    try{
        const {email}=req.params
        const User=await user.find({email:email})

        if (!User){
            return res.status(401).json({
                message:"usr not found"
            })
        }
        if (User[0]?.role === "admin") {
            next();
        } else {
            return res.status(403).json({
                message: "Access denied"
            });
        }
    }catch(err){
        console.error("middleware error:",err)
        return res.status(500).json({
            message:"problem with middleware"
        })
    }
})