// @desp GET goals
// @route GET /api/todos
// @access PRIVATE

const getTodo = (req, res) => {
  res.json({ message: "Get Goals" });
};

module.exports = {
  getTodo,
};
