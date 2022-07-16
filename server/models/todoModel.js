const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    task: {
      type: String,
      required: [true, "Please add a task"],
    },

    desp: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
