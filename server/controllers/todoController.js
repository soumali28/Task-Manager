const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
// @desp GET goals
// @route GET /api/todos
// @access PRIVATE

const getTodo = asyncHandler(async (req, res) => {
  const tasks = await Todo.find();
  res.json(tasks);
});


// @desp GET goal by id
// @route GET /api/todos
// @access PRIVATE
const getTodoId = asyncHandler(async (req, res) => {
  const tasks = await Todo.findById(req.params.id);
  res.json(tasks);
});

// @desp  Post goals
// @route POST /api/todos
// @access PRIVATE

const postTodo = asyncHandler(async (req, res) => {
  if (!req.body.task) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const tasks = await Todo.create({
    task: req.body.task,
    desp: req.body.desp,
  });
  res.json(tasks);
});

// @desp Update goal
// @route PUT /api/todos
// @access PRIVATE

const updateTodo = asyncHandler(async (req, res) => {
  const task = await Todo.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTodo);
});

// @desp delete goal
// @route DELETE /api/todos
// @access PRIVATE

const deleteTodo = asyncHandler(async (req, res) => {
  const task = await Todo.findById(req.params.id)
  if(!task){
    res.status(400);
    throw new Error("Task not found");
  }
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getTodo,
  getTodoId,
  postTodo,
  updateTodo,
  deleteTodo,
};
