const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const { errorHandler } = require("./server/middleware/errorMiddleware");
const connectDb = require("./server/config/db");

const app = express();
const port = process.env.PORT || 5000;
connectDb();

// cors: * makes public api, orgin can have array of urls
app.use(cors({
  origin: "http://localhost:3000"
}))

// testing route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./server/routes/todos"));
app.use("/api/users", require("./server/routes/userRoutes"));

app.use(errorHandler);

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running at port:", port);
});
