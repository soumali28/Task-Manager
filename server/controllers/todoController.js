const asyncHandler = require("express-async-handler");

// @desp GET goals
// @route GET /api/todos
// @access PRIVATE

const getTodo = asyncHandler(async (req, res) => {
  res.json({ message: "Get Goals" });
});

// @desp  Post goals
// @route POST /api/todos
// @access PRIVATE

const postTodo = asyncHandler(async (req, res) => {
  if (!req.body.task) {
    res.status(400);
    throw new Error("Please add a text");
  }
  res.json({ message: "Create Goals" });
});

// @desp Update goal
// @route PUT /api/todos
// @access PRIVATE

const updateTodo = asyncHandler(async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

// @desp delete goal
// @route DELETE /api/todos
// @access PRIVATE

const deleteTodo = asyncHandler(async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getTodo,
  postTodo,
  updateTodo,
  deleteTodo,
};
