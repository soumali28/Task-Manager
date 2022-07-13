const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get Goals" });
});

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
