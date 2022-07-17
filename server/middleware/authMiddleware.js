const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      // split will turn the token to an array and split it by space and index 1 will give just the token
      token = req.headers.authorization.split(" ")[1];

      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from the token            -password will not include the unhashed password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if(!token){
    res.status(401);
    throw new Error("Not Authorized, no token found")
  }
});

module.exports = { protect };
