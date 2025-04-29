"use strict";
const express = require("express");
const  defaultroute  = require("../controllers/default");

const router = express.Router();

router.get("/", defaultroute);

module.exports = router;