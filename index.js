const express = require("express");
const app = express();
var path = require("path");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/board", (_, res) => {
  res.render("board");
});
app.get("/aphelion", (_, res) => {
  res.send("<h1 style=`text-align: center`>The registrations are yet to open </h1>");
});

app.listen(process.env.PORT || 3000);
