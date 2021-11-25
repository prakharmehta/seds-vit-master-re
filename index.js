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
  if (Date.now() > 1637854200000) res.download("./public/pdf/aphelion_problem_statements.pdf");
  else res.send("<h1>The problem statements will be released at 9pm.</h1>");
});

app.get("/aphelion/submission", (_, res) => {
  if (Date.now() > 1637854200000) res.redirect("https://forms.gle/5BU6bjyDUPSdmzJr5");
  else
    res.send(
      "<h1>The submission form will be live at 9pm tonight. Be sure to submit before 9pm tomorrow (26th November). </h1>"
    );
});

// app.get("/testd", (_, res) => {
//   if (Date.now() > 1637607900000) res.download("./public/pdf/serve.pdf");
//   else res.send("Problem releases at " + Date.now() + " ||||| " + 1637607900000);
// });

app.listen(process.env.PORT || 3000);
