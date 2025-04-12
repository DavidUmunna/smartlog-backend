import express,{Request,Response} from "express"
import user, { UserType } from "../models/user"
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
        const User: UserType | null = await user.findOne({ email: email });

        if (!User){
            return res.status(401).json({
                message:"usr not found"
            })
        }
        if (User?.role === "admin") {
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