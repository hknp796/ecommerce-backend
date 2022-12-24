import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  try {
    jwt.verify(token, "dddd", function (err, decoded) {
      req.user = decoded;
    });
  } catch (e) {
    return res.send(401).json("valid token");
  }
  return next();
};

export { authentication };
