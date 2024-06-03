const { Galaxy, Star } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  try {
    const galaxy = await Galaxy.findAll();
    // Respond with an array and 2xx status code
    res.status(200).render("views/Galaxy/index.html.twig", { galaxy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show resource
const show = async (req, res) => {
  try {
    const newGalaxy = await Galaxy.findByPk(req.params.id);
    if (newGalaxy) {
      // Respond with a single object and 2xx code
      res.status(200).json(newGalaxy);
    } else {
      res.status(404).json({ error: "Galaxy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const newGalaxy = await Galaxy.create(req.body);
    // Issue a redirect with a success 2xx code
    res.status(201).json(newGalaxy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  try {
    const newGalaxy = await Galaxy.findByPk(req.params.id);
    if (newGalaxy) {
      await newGalaxy.update({ ...req.body });
      // Respond with a single resource and 2xx code
      res.status(200).json(newGalaxy);
    } else {
      res.status(404).json({ error: "Galaxy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a single resource
const remove = async (req, res) => {
  try {
    const newGalaxy = await Galaxy.findByPk(req.params.id);
    if (newGalaxy) {
      await newGalaxy.destroy();
      // Respond with a 2xx status code and bool
      res.status(204).json({ message: `${newGalaxy} - was destroyed` });
    } else {
      res.status(404).json({ error: "Galaxy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const form = async (req, res) => {
  let galaxy = new Galaxy();
  try {
    if ("undefined" !== typeof req.params.id) {
      galaxy = await Galaxy.findByPk(req.params.id);
    }
    res
      .status(200)
      .render(`views/Galaxy/${galaxy.id ? "edit" : "new"}.html.twig`, {
        galaxy,
      });
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Export all controller actions
module.exports = { index, show, create, update, remove, form };
