import jwt from "jsonwebtoken";

import { Users } from "../models/user.model.js";
const createToken = (user) => jwt.sign({ user }, "dddd");

const signup = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.data.email });

    if (user) {
      return res
        .status(500)
        .json({ status: "Failed", message: "Please try with different email" });
    }

    user = await Users.create(req.body.data);

    const token = createToken(user);

    return res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your email" });
    }

    const match = await user.checkPassword(req.body.password);
    console.log(match, "amthc");
    if (!match) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your password" });
    }

    const token = createToken(user);

    return res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};
export { signup, login };
