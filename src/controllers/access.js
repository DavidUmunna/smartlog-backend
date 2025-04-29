"use strict";



const  user_access=(req, res)=> {
  
    try {
      res.status(200).json({
        authentication: true,
        message: "you have access to this protected route",
        user: req.user
      });
      resolve();
    } catch (error) {
      console.error("error during processing :",error)
      res.status(500).json({message:"an error occured",authentication:false})
    }
  };


module.exports = {
  user_access
};
