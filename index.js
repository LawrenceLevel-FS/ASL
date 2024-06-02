// Load in our Express framework
const express = require(`express`);
const bodyParser = require("body-parser");

// Create a new Express instance called "app"
const app = express();

// rendering engine
app.configure(() => {
  app.set("views", `${__dirname}/templates`);
  app.set("view engine", "twig");

  app.set("twig options", {
    strict_variables: false,
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

// Load in our RESTful routers
const routers = require("./routers/index.js");
const { twig } = require("twig");

// Home page welcome middleware
app.get("/", (req, res) => {
  res.render();
  // res.status(200).send("Welcome to Star Tracker Library");
});

// Register our RESTful routers with our "app"
app.use(`/planets`, routers.planet);
app.use(`/stars`, routers.star);
app.use(`/galaxies`, routers.galaxy);

// Set our app to listen on port 3000
app.listen(3000);
