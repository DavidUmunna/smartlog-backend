const mongoose=require("mongoose")


const attendancelog_schema=new mongoose.Schema({
    Date:{
        type:Date,
        default:Date.now,
        required:true
    },
    Employee_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    Time_in:{
        type:Date,
        default:Date.now
    },
    Time_out:{
        type:Date,
        default:Date.now
    },
    Break_time:{

    },
    status:{
        type:String,
        enum:['present','absent'],default:'absent'
    },
    leave_type:{
        type:String,
        enum:[]
    },
    Reason_for_absence:{
        type:String,
        required:false
    },
    comments:{
        type:String
    }

})


const Attendacelog=mongoose.model("Attendace",attendancelog_schema)

module.exports=Attendacelog