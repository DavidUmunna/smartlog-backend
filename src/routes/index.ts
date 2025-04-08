import express,{Request,Response} from "express"


const router =express.Router()


router.get("/",async(response:Response,request?:Request)=>{
    try{
         response.status(201).json({message:"welcome to the smartlogapi💻"})
    }catch(error){
        console.error(error)
        response.status(501).json({message:"an error occured"})
    }
   
})

module.exports=router;