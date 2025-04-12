import express,{Request,Response} from "express"

declare global{
    namespace express{
        interface Request{
            user:any
        }
    }
}

export const user_access=async(req:Request,res:Response):Promise<any>=>{
    res.status(200).json({
        authentication:true,
        message:"you have access to this protected route",
        user:req.user
    })
}