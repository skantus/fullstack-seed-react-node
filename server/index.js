// https://treehouse.github.io/installation-guides/mac/mongo-mac.html
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./configurations/db");

const api = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use("/api", api);

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Running server on port ${port}`);
});
