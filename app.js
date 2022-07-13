const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

// testing route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
// routes for the tasks
app.use("/api/getgoals", require("./server/routes/todos"));

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running at port:", port);
});
