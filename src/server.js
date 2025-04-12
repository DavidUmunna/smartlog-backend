import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan"
import connectDB from "./config/db.js";
<<<<<<< HEAD
import apiRoutes from "./routes/index.js";
import employees from './routes/employee.js'
=======

>>>>>>> c0aa4bb (feat: initialize backend with Express, MongoDB, and essential middleware)
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
connectDB()
// Routes
<<<<<<< HEAD

app.use("/api", apiRoutes);
app.use('/api/employee',employees)
=======
import apiRoutes from "./routes/index.js";
app.use("/api", apiRoutes);
>>>>>>> c0aa4bb (feat: initialize backend with Express, MongoDB, and essential middleware)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
