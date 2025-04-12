import express from "express"


export const user_access=async(req,res)=>{
    res.status(200).json({
        authentication:true,
        message:"you have access to this protected route",
        user:req.User
    })
}