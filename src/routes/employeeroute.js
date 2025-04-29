"use strict";
const express = require("express");
const { getusers, updateuser } = require("../controllers/employee");
const {signin, createusers} =require('../controllers/admin')
const router = express.Router();

router.get("/", getusers);
router.put("/:id", updateuser);
router.post('/create',createusers)
router.post('/signin',signin)

module.exports = router;