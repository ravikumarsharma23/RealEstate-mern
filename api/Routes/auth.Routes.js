import express from "express";
import { signup } from "../Controllers/auth.Controllers.js";

const authRouter = express.Router();
authRouter.post("/signup", signup);

export default authRouter;
