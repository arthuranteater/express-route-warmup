const express = require("express");
const app = express();
const planets = require("./data.js");
const port = 3001;

app.get("/", (request, response) => {
  response.send(planets);
});

app.get("/:id", (request, response) => {
  let number = Number(request.params.id);
  console.log(typeof number);
  for (let i = 0; i < planets.length; i++) {
    if (number === planets[i].id) {
      response.send(planets[i]);
    }
  }
});

app.listen(port, () => console.log("it works"));
