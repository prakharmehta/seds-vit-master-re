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
  res.redirect("https://forms.gle/puwy2NR6kvHmEKQy7");
});
app.get("/testd", (_, res) => {
  if (Date.now() > 1637607900000) res.download("./public/pdf/serve.pdf");
  else res.send("Problem releases at " + Date.now() + " ||||| " + 1637607900000);
});

app.listen(process.env.PORT || 3000);
