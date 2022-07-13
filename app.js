const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/src/pages/SignIn.jsx");
})

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running at port:", port);
});