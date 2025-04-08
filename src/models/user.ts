import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    
    email:String,
    password:String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    role:String,enum:['admin','staff'], default:"staff",
    updatedAt: {
        type: Date,
        default: Date.now
      }

},{timestamps:true})

const user=mongoose.model("user",userSchema)

export default user;