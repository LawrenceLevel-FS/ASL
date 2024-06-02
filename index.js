// Load in our Express framework
const express = require(`express`);
const bodyParser = require("body-parser");

// Create a new Express instance called "app"
const app = express();

// rendering engine
app.set("views", `${__dirname}/templates`);
app.set("view engine", "twig");

app.use(bodyParser.urlencoded({ extended: false }));

// Load in our RESTful routers
const routers = require("./routers/index.js");

// Home page welcome middleware
app.get("/", (req, res) => {
  res.status(200).render("views/Default/home.html.twig", {
    name: "Level Lawrence",
    favFoods: ["Pizza", "Fettuccine", "Pasta Ali Vodka"],
  });
  // res.status(200).send("Welcome to Star Tracker Library");
});

// Register our RESTful routers with our "app"
app.use(`/planets`, routers.planet);
app.use(`/stars`, routers.star);
app.use(`/galaxies`, routers.galaxy);

// Set our app to listen on port 3000
app.listen(3000);
