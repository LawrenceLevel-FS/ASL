// Load in Express framework
const express = require(`express`);

// Load in our controller/action instances
const galaxyCtlr = require(`../controllers/galaxy.js`);
const { checkCType } = require("../middlewares/api.js");

// Create a new Router instance and call it "router"
const router = new express.Router();

// RESTful resource mappings
router.get(`/:id/edit`, checkCType, galaxyCtlr.form);
router.get(`/new`, checkCType, galaxyCtlr.form);
router.get(`/`, checkCType, galaxyCtlr.index);
router.post(`/`, checkCType, galaxyCtlr.create);
router.get(`/:id`, checkCType, galaxyCtlr.show);
router.put(`/:id`, checkCType, galaxyCtlr.update);
router.delete(`/:id`, checkCType, galaxyCtlr.remove);

// export "router"
module.exports = router;
