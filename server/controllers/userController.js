const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desp  Get user
// @route GET /api/users/me
// @access PUBLIC

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// @desp  Post user
// @route POST /api/users
// @access PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  if (!req.body.username) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
});

// @desp  Authenticate user
// @route POST /api/users/login
// @access PUBLIC

const loginUser = asyncHandler(async (req, res) => {
  if (!req.body.username) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
});

module.exports = {
  getUser,
  registerUser,
  loginUser,
};
