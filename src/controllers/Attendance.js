
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

const churnout=async(req,res)=>{
    try{
        const {Id}=req.params.Id
        const {timeout}=req.body

        const existing_log=attendance.findById(Id)
        if(!existing_log){
            res.status(400).json({message:"log does not exist"})
        }
        existing_log.TimeOut=timeout
        res.status(200).json({message:"log updated successfully"})

    }catch(error){
        console.error("error from churnout :",error)
        res.status(500).json({message:"serve error",error:error})

    }
}

const leaveposting=async(req,res)=>{
    try{
        const {Id}=req.params.id
        const {Leavetype}=req.body

        const existing_log=attendance.findById(Id)
        if(!existing_log){
            res.status(400).json({message:"log does not exist"})
        }
        existing_log.leavetype=Leavetype
        res.status(200).json({message:"log updated successfully"})



    }catch(error){
        console.error("error from leaveposting:",error)
        res.status(500).json({message:"server error",error:error})

    }
}


const Absence_validation=async(req,res)=>{
    try{
        const {Id}=req.params.id
        const {Reasonforabsence}=req.body

        const existing_log=attendance.findById(Id)
        if(!existing_log){
            res.status(400).json({message:"log does not exist"})
        }
        existing_log.Reasonforabsence=Reasonforabsence
        res.status(200).json({message:"log updated successfully"})



    }catch(error){
        console.error("error from Absence:",error)
        res.status(500).json({message:"server error",error:error})

    }
}
const comments_addition=async(req,res)=>{
    try{
        const {Id}=req.params.id
        const {Comments}=req.body

        const existing_log=attendance.findById(Id)
        if(!existing_log){
            res.status(400).json({message:"log does not exist"})
        }
        existing_log.comments=Comments
        res.status(200).json({message:"log updated successfully"})



    }catch(error){
        console.error("error from Absence:",error)
        res.status(500).json({message:"server error",error:error})

    }
}




module.exports={
    churnuser,
    churnout,
    leaveposting,
    Absence_validation,
    comments_addition
}