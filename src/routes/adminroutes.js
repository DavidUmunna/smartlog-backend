"use strict";
const express = require("express");
const { getusers, signin, createusers } = require("../controllers/admin");
const auth = require("../middleware/authentication");

const router = express.Router();

router.post("/createuser", createusers);
router.get('/', getusers);
router.post('/signin', signin);

module.exports = router;