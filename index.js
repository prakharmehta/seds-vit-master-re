const express = require("express");
const app = express();
var path = require("path");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/board", (req, res) => {
  res.render("board");
});
app.get("/live", (_, res) => {
  res.redirect("https://teams.live.com/meet/95976355561650");
});

app.listen(process.env.PORT || 3000);
