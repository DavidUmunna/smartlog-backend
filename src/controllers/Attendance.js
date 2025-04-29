
const attendance=require("../models/attendance_log")
const churnuser=async (req,res)=>{
    try{

        const {EmployeeName,TimeIn,status}=req.body
        
        const new_log=new attendance({
            Date,
            EmployeeName,
            TimeIn,
            status,
        })
        
        await new_log.save();
        res.status(201).json({message:"user churn was successful"})
    }catch(error){
        console.error("error from attendance controller",error)
        res.status(500).json({message:"user churn failed"})
    }


}



module.exports={churnuser}