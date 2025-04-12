"use strict";
const express = require("express");
const { getusers, updateuser } = require("../controllers/employee");

const router = express.Router();

router.get("/", getusers);
router.put("/", updateuser);

module.exports = router;