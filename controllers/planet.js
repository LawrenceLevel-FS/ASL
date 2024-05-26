const { planet } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  try {
    const planets = await planet.findAll();
    // Respond with an array and 2xx status code
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show resource
const show = async (req, res) => {
  try {
    const newPlanet = await planet.findByPk(req.params.id);
    if (newPlanet) {
      // Respond with a single object and 2xx code
      res.status(200).json(newPlanet);
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const newPlanet = await planet.create(req.body);
    // Issue a redirect with a success 2xx code
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const updatedPlanet = await planet.findByPk(req.params.id);
    if (updatedPlanet) {
      await updatedPlanet.update({ ...req.body });
      // Respond with a single resource and 2xx code
      res.status(200).json(updatedPlanet);
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a single resource
const remove = async (req, res) => {
  try {
    const rmPlanet = await planet.findByPk(req.params.id);
    if (rmPlanet) {
      await rmPlanet.destroy();
      // Respond with a 2xx status code and bool
      res.status(204).json({ message: `${rmPlanet} - was destroyed` });
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Export all controller actions
module.exports = { index, show, create, update, remove };
