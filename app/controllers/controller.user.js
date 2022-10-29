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

    return res.status(200).json({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your email" });
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your password" });
    }

    const token = createToken(user);

    return res.status(200).json({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

// const authentication = (req, res, next) => {
//   const token = req.headers.authorization.replace("Bearer ", "");
//   try {
//     jwt.verify(token, "dddd", function (err, decoded) {
//       req.user = decoded;
//     });
//   } catch (e) {
//     return res.send(401).json("valid token");
//   }
//   return next();
// };

const userData = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.user.user.email });

    if (user) {
      return res.status(200).json({ user });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};
export { signup, login, userData };
