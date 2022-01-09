const express = require("express");
const app = express();
var path = require("path");
const members = require("./boardMembers.json");
const sanityConfig = require("./sanity_config.json");

const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const client = sanityClient({
  projectId: "wvxxjfa8",
  dataset: "production",
  apiVersion: "2022-01-09", // use current UTC date - see "specifying API version"!
  token: sanityConfig.token, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

// Routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/board", (_, res) => {
  res.render("board", { members });
});

app.get("/*", async (_, res) => {
  const query = `*[_type == "event" && eventEndDate.utc > $today]`;
  const today = new Date("2022-01-12").toISOString();
  const event = await client.fetch(query, { today });
  console.log(event);
  const { title, eventDate, poster, path, eventDescription = "", tagLine = "" } = event[0];
  posterUrl = imageBuilder.image(poster).url();
  res.render("event", {
    eventDate: eventDate.utc,
    title,
    eventDescription,
    tagLine,
    posterUrl,
    path,
  });
});

app.listen(process.env.PORT || 3000);
