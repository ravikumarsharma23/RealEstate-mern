import express from 'express';
import { test } from '../Controllers/User.Controllers.js';

const userRouter = express.Router();
userRouter.get('/test',test)

export default userRouter;