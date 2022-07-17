const express = require("express");
const router = express.Router();
const {
  getTodo,
  getTodoId,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTodo).post(protect, postTodo);
router
  .route("/:id")
  .put(protect, updateTodo)
  .delete(protect, deleteTodo)
  .get(protect, getTodoId);

module.exports = router;
