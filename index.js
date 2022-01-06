const express = require("express");
const app = express();
var path = require("path");
const members = require("./boardMembers.json");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/board", (_, res) => {
  res.render("board", { members });
});


app.listen(process.env.PORT || 3000);
