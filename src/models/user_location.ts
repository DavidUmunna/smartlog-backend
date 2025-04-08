import mongoose from  "mongoose"


const userLocationSchema=new mongoose.Schema({
    userId: String,
    latitude: Number,
    longitude: Number,
    timestamp: { type: Date, default: Date.now },
})

const location=mongoose.model("location",userLocationSchema)

export default location;