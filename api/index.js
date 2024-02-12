import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/User.Route.js";
import authRouter from "./Routes/auth.Routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/User", userRouter);
app.use("/api/auth", authRouter);

app.use((error, req, res) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.statusCode().json({
    success: false,
    statusCode,
    message,
  });
});
