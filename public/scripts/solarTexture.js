const TEXTURES = [
  "titan_bright.jpg",
  "mars_bright2.jpg",
  "pluto_bright.jpg",
  "jupiter_bright.jpg",
  "moon_bright.jpg",
  "europa_bright.jpg",
  "venus_bright.jpg",
];

// these are currently not used
// [
//   "earth_edit.jpg",
//   "io_bright.jpg",
//   "earth_night_bright.jpg",
//   "makemake_bright.jpg",
//   "neptune_bright.jpg",
// ];

const texture_element = document.querySelector(".solar__texture > div");

const index = new Date().getDay();

texture_element.style.backgroundImage = `url(../img/SolarTextures/${TEXTURES[index]})`;
