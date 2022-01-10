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
  // token: sanityConfig.token, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

// Routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/board", (_, res) => {
  res.render("board", { members });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  let query = `*[_type == "event" && path.current=="${id}"]`;

  if (id === "live") {
    const today = new Date().toISOString();
    query = `*[_type == "event" && eventEndDate.utc > "${today}"]`;
  }

  const event = await client.fetch(query);

  if (event.length === 0) {
    return res.redirect("/");
  }

  const {
    title,
    eventDate,
    eventEndDate,
    poster,
    path,
    eventMeetingLink,
    eventCountdownVisible = false,
    eventDescription = "",
    tagLine = "",
  } = event[0];

  const currentDate = new Date();
  const eventDatevalue = new Date(eventDate.utc);
  const eventEndDateValue = new Date(eventEndDate.utc);

  // redirect to meeting link if time left is less that 3 sec
  if (eventDatevalue - currentDate <= 3000 && eventMeetingLink && currentDate < eventEndDateValue) {
    return res.redirect(eventMeetingLink);
  } else if (eventDatevalue - currentDate <= 1000 && !eventMeetingLink) {
    return res.redirect("/");
  }

  tempDate = new Date(currentDate.getTime() + 25000);
  // console.log("Countdown ", eventCountdownVisible);
  // console.log("date", eventEndDateValue >= currentDate);
  // console.log("Visible" + (eventCountdownVisible && eventEndDateValue >= currentDate ? true : false));
  const posterUrl = imageBuilder.image(poster).url();
  return res.render("event", {
    // eventDate: eventDate.utc,
    eventDate: tempDate.toUTCString(),
    title,
    eventDescription,
    eventCountdownVisible: eventCountdownVisible && eventEndDateValue >= currentDate,
    tagLine,
    posterUrl,
    eventMeetingLink,
    path,
  });
});

app.listen(process.env.PORT || 3000);
