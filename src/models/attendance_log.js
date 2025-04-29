const mongoose=require("mongoose")


const attendancelog_schema=new mongoose.Schema({
    Date:{
        type:Date,
        default:Date.now,
        required:true
    },
    EmployeeName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    TimeIn:{
        type:String,
        
    },
    TimeOut:{
        type:String,
        
    },
   
    status:{
        type:String,
        enum:['present','absent'],default:'absent'
    },
    leavetype:{
        type:String,
        enum:["sick_leave","paternity_leave","maternity_leave","unpaid_leave","LOA"] 
    },
    Reasonforabsence:{
        type:String,
        required:false
    },
    comments:{
        type:String
    }

})


const Attendacelog=mongoose.model("Attendace",attendancelog_schema)

module.exports=Attendacelog