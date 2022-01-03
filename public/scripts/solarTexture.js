const TEXTURES = [
  "mars_bright.jpg",
  "venus_bright.jpg",
  "jupiter_bright.jpg",
  "makemake_bright.jpg",
  "moon_bright.jpg",
  "europa_bright.jpg",
  "pluto_bright.jpg",
  "neptune_bright.jpg",
];

const texture_element = document.querySelector(".solar__texture > div");

const index = new Date().getDate();

texture_element.style.backgroundImage = `url(../img/SolarTextures/${TEXTURES[index]})`;
