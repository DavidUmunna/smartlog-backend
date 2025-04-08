import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan"
import connectDB from "./config/db.js";
import apiRoutes from "./routes/index.js";
import employees from './routes/employee.js'
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
connectDB()
// Routes

app.use("/api", apiRoutes);
app.use('/api/employee',employees)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
