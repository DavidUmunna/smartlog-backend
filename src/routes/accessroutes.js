"use strict";
const express = require("express");
const { user_access } = require("../controllers/access");
const auth = require("../middleware/authentication");

const router = express.Router();

router.get("/", auth, user_access);

module.exports = router;