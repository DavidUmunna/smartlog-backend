import employeeRoutes from "./routes/employeeroute";
import adminroutes from "./routes/adminroutes";
import accessroutes from "./routes/accessroutes";
import defaultroute from "./routes/defaultroute";

import express from "express";

const appRoutes = express();

appRoutes.use("/employee", employeeRoutes);
appRoutes.use("/admin", adminroutes);
appRoutes.use("/access", accessroutes);
appRoutes.use("/default", defaultroute);

export default appRoutes;