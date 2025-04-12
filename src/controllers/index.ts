import express,{Request,Response} from "express"





export const index=async(request:Request,response:Response)=>{
    try{
         response.status(201).json({message:"welcome to the smartlogapi💻"})
    }catch(error){
        console.error(error)
        response.status(501).json({message:"an error occured"})
    }
   
}

