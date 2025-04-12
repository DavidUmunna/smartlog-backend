const mongoose =require("mongoose")

const connectDB = async (uri="mongodb://127.0.0.1:27017/smartlog") => {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri);
        console.log("Database connected successfully 👍");
    } catch (error) {
        console.error("MongoDB connection failed 😓", error.message);
        process.exit(1); 
    }
};

module.exports=connectDB