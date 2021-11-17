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
  if (Date.now() > 1637170200000) res.redirect("https://meet.google.com/jqs-pciq-sme");
  else res.send("<h1>The meeting is not live yet</h1>");
});

app.listen(process.env.PORT || 3000);
