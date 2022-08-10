import jwt from "jsonwebtoken";
const createToken = (user) => jwt.sign({ user }, "dddd");

const signUp = async (req, res) => {
  try {
    return res.status(200).json("hello");
  } catch (error) {
    return res.status(500).json(error);
  }
};
export { signUp };
