const express = require("express");
const app = express();
var path = require("path");
const members = require("./boardMembers.json");
const sanityConfig = require("./sanity_config.json");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "wvxxjfa8",
  dataset: "production",
  apiVersion: "2022-01-09", // use current UTC date - see "specifying API version"!
  token: sanityConfig.token, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

// Routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/board", (_, res) => {
  res.render("board", { members });
});

app.get("/*", (_, res) => {
  const query = `*[_type == "event" && eventEndDate.utc > $today]`;
  const today = new Date("2022-01-12").toISOString();
  // console.log(today);
  // client.fetch(query, { today }).then((event) => {
  //   console.log(event);
  // });
  res.render("event", {
    eventDate: today,
  });
});

app.listen(process.env.PORT || 3000);
