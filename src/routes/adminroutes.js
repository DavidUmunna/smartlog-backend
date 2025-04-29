"use strict";
const express = require("express");
const { getusers, signin, createusers } = require("../controllers/admin");
const admin_val = require("../middleware/admin_validation");

const router = express.Router();

router.get('/', getusers);
router.post('/:email', admin_val, signin);
router.post("/createuser", createusers);

module.exports = router;