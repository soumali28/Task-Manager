const express = require("express");
const router = express.Router();
const { getTodo } = require("../controllers/todoController");

router.get("/", getTodo);

router.post("/", (req, res) => {
  res.json({ message: "Create Goals" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = router;
