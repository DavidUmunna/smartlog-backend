import express,{Request,Response} from "express"
// Extend the Request interface to include the 'user' property
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
const jwt = require("jsonwebtoken");


const router=express.Router()


router.use(async (req:Request, res:Response, next):Promise<any> => {
    try{

        const authheaders=req.headers.authorization
        if (!authheaders|| !authheaders.startsWith("Bearer")){
            return res.status(401).json({authentication:false,
                message:"no token provided"
            })
        }
        const token=authheaders.split(" ")[1]
        console.log("token:",token)
        
        const secretKey="pedro123"
        
        jwt.verify(token,secretKey,(err: any,decoded: any)=>{
            if (err){
                return res.status(401).json({
                    authentication:false,
                    message:"invalid token"
                })
            }
            
            req.user =decoded
            console.log("Decoded token:", decoded);
            next();
            
            
            
        
        })}catch(error){
        console.log("error in authentication middleware")
        res.clearCookie("authToken")
        return res.status(401).json({
            authenticated: false,
            message: "Invalid or expired token",
          });
    }
})