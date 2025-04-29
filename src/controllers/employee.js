"use strict";

const  User =require('../models/user')

 const getusers = async (req, res) => {
  try {
    const email = req.params.id;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

 const updateuser = async (req, res) => {
  try {
    const email = req.params.id;
    const { password } = req.body;

    const user = await User.findOneAndUpdate({ email }, { password }, { new: true });

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    return res.status(200).json({ message: "User password updated successfully" });
  } catch (err) {
    console.error("Server error", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports={getusers,updateuser}
