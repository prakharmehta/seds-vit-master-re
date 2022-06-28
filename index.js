const express = require("express");
const app = express();
var path = require("path");
const members = require("./boardMembers.json");
const allSolarTextures = require("./solarTexture.json");

const htmlToJson = require("html-to-json");
const { parse } = require("rss-to-json");

const { format } = require("date-fns");

// Unused solar textures [   "earth_edit.jpg",   "io_bright.jpg",   "earth_night_bright.jpg",  "makemake_bright.jpg",   "neptune_bright.jpg"]

const { formatEventDescription, formatEventDescriptionForMeta } = require("./utils/formatEventDescription");

const sanityConfig = require("./sanity_config.json");

const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const client = sanityClient({
  projectId: "wvxxjfa8",
  dataset: "production",
  apiVersion: "2022-01-12", // use current UTC date - see "specifying API version"!
  token: sanityConfig.token, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

// Routes
app.get("/", (_, res) => {
  const index = new Date().getDay();

  res.render("index", { solarTexture: allSolarTextures[index] });
});

app.get("/board", (_, res) => {
  res.render("board", { members });
});

app.get("/blogs", async (req, res) => {
  const { limit = 0 } = req.query;

  try {
    var feed = await parse("https://medium.com/feed/@sedsvit");
    var items = feed.items;

    // console.log(typeof limit  );

    if (limit) items = items.slice(1, parseInt(limit) + 1);

    const posts = await Promise.all(
      items.map(async (item) => {
        const data = await htmlToJson.parse(item.content_encoded, {
          title: function ($doc) {
            return $doc.find("h3").text();
          },
          author: function ($doc) {
            return $doc.find("h4").text();
          },
          image: function ($doc) {
            return $doc.find("img").attr("src");
          },
        });
        return {
          ...data,
          title: item.title,
          link: item.link,
          published: format(new Date(item.published), "do MMM, yyyy"),
        };
      })
    );
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// app.get("/show-me-countdown", (_, res) => {
//   const currentDate = new Date();

//   const tempDate = new Date(currentDate.getTime() + 26000);
//   return res.render("event", {
//     eventDate: tempDate.toUTCString(),
//     title: "Apollo 11",
//     eventDescription: ["This is launch operations manager", "The Launch team wishes you ", "good luck and godspeed"],
//     eventCountdownVisible: true,
//     tagLine: "",
//     posterUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/apollo_11_launch_-_gpn-2000-000630_1.jpg",
//     eventMeetingLink: "",
//   });
// });

app.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = id.toLowerCase();
  let query = `*[_type in ["event", "blog"] && path.current=="${id}"][0]`;

  if (id === "live") {
    const today = new Date().toISOString();
    query = `*[_type == "event" && eventEndDate.utc > "${today}"] | order(eventDate.utc asc) [0]`;
  }

  const event = await client.fetch(query);
  if (!event) {
    return res.redirect("/");
  }

  if (event._type === "blog") {
    res.redirect(event.blogLink);
    return;
  }

  const {
    title,
    eventDate,
    eventEndDate,
    poster,
    path,
    publishEvent = true,
    eventMeetingLink,
    eventMeetingRedirect = true,
    eventCountdownVisible = false,
    eventDescription = "",
    tagLine = "",
  } = event;

  const currentDate = new Date();
  const eventDatevalue = new Date(eventDate.utc);
  const eventEndDateValue = new Date(eventEndDate.utc);

  const formattedDescription = await formatEventDescription(eventDescription);
  const metaDescription = await formatEventDescriptionForMeta(eventDescription);
  if (!publishEvent) {
    return res.redirect("/");
  }

  // redirect to meeting link if time left is less that 3 sec
  if (
    eventMeetingRedirect &&
    eventDatevalue - currentDate <= 3000 &&
    eventMeetingLink &&
    currentDate < eventEndDateValue
  ) {
    return res.redirect(eventMeetingLink);
  } else if (eventDatevalue - currentDate <= 1000 && !eventMeetingLink && currentDate < eventEndDateValue) {
    return res.redirect("/");
  }
  const posterUrl = imageBuilder.image(poster).url();
  return res.render("event", {
    eventDate: eventDate.utc,
    title,
    eventDescription: formattedDescription,
    metaDescription,
    eventCountdownVisible: eventCountdownVisible && eventEndDateValue >= currentDate && eventMeetingRedirect,
    tagLine,
    posterUrl,
    eventMeetingLink: eventMeetingRedirect ? eventMeetingLink : "",
    path,
  });
});

app.listen(process.env.PORT || 3000);
