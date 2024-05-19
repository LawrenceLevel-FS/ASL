const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const cors = require("cors");
const port = "8080" || process.env.PORT;
const contactRoute = require("./routes/contactsRoute/contactRoute.js");

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Starting point /8080
router.get("/", (req, res) => {
  res.status(200).json({ message: `${req.method} - was used` });
});

// routes
router.use("/v1/contacts", contactRoute);

module.exports = { app, router, port };
