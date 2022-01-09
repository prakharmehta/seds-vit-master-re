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

  if (event.length == 0) {
    res.redirect("/");
  }

  const { title, eventDate, poster, path, eventMeetingLink, eventDescription = "", tagLine = "" } = event[0];

  const currentDate = new Date();
  const eventDateObj = new Date(eventDate.utc);

  // redirect to meeting link if time left is less that 1 sec
  if (eventDateObj - currentDate <= 1000 && eventMeetingLink) {
    return res.redirect(eventMeetingLink);
  } else if (eventDateObj - currentDate <= 0 && !eventMeetingLink) {
    return res.redirect("/");
  }

  const posterUrl = imageBuilder.image(poster).url();
  return res.render("event", {
    eventDate: eventDate.utc,
    title,
    eventDescription,
    tagLine,
    posterUrl,
    path,
  });
});

app.listen(process.env.PORT || 3000);
