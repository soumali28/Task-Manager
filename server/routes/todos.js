const express = require("express");
const router = express.Router();
const {
  getTodo,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodo).post(postTodo);

router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
