const express = require("express");
const router = express.Router();
const {
  getTodo,
  getTodoId,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodo).post(postTodo);

router.route("/:id").put(updateTodo).delete(deleteTodo).get(getTodoId);

module.exports = router;
