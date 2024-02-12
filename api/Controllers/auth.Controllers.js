import User from "../Model/User.Model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";


export const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
     next(error)
  }
};
