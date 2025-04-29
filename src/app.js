"use strict";
const employeeroute = require("./routes/employeeroute");
const adminroutes = require("./routes/adminroutes");
const accessroutes = require("./routes/accessroutes");
const defaultroute = require("./routes/defaultroute");
const express = require("express");

const appRoutes = express();

appRoutes.use("/employee", employeeroute);
appRoutes.use("/admin", adminroutes);
appRoutes.use("/access", accessroutes);


module.exports = appRoutes;