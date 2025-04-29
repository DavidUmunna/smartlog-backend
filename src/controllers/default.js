"use strict"

const defaultroute = async (req, res) => {
  try {
    res.status(201).json({ message: "Welcome to the SmartLogAPI💻" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "An error occurred" });
  }
};

module.exports=defaultroute





