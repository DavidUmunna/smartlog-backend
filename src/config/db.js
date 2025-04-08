import mongoose from "mongoose"



const connectDB=async (uri)=>{
    try{
        mongoose.connect( uri  ).then(()=>{console.log("database connected successfully 👍")})
        .catch(err=>console.log(err))
        

    }catch(error){
        console.log("mongo db connection failed 😓")
    }

}

export default connectDB