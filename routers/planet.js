// Load in Express framework
const express = require(`express`);

// Load in our controller/action instances
const planetCtlr = require(`../controllers/planet.js`);
const { checkCType } = require("../middlewares/api.js");

// Create a new Router instance and call it "router"
const router = new express.Router();

// RESTful resource mappings
router.get(`/:id/edit`, checkCType, planetCtlr.form);
router.get(`/new`, checkCType, planetCtlr.form);
router.get(`/`, checkCType, planetCtlr.index);
router.post(`/`, checkCType, planetCtlr.create);
router.get(`/:id`, checkCType, planetCtlr.show);
router.put(`/:id`, checkCType, planetCtlr.update);
router.delete(`/:id`, checkCType, planetCtlr.remove);

// export "router"
module.exports = router;
