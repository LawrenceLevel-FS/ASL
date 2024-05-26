const { Star } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  try {
    const stars = await Star.findAll();
    // Respond with an array and 2xx status code
    res.status(200).json(stars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show resource
const show = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      // Respond with a single object and 2xx code
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const newStar = await Star.create(req.body);
    // Issue a redirect with a success 2xx code
    res.status(201).json(newStar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      await star.update({ ...req.body });
      // Respond with a single resource and 2xx code
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a single resource
const remove = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      await star.destroy();
      // Respond with a 2xx status code and bool
      res.status(204).json({ message: `${star} - was destroyed` });
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all controller actions
module.exports = { index, show, create, update, remove };
