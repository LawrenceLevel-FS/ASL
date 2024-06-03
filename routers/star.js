// Load in Express framework
const express = require(`express`);

const { checkCType } = require("../middlewares/api.js");

// Load in our controller/action instances
const starCtlr = require(`../controllers/star.js`);

// Create a new Router instance and call it "router"
const router = new express.Router();

// RESTful resource mappings
router.get(`/:id/edit`, checkCType, starCtlr.form);
router.get(`/new`, checkCType, starCtlr.form);
router.get(`/`, checkCType, starCtlr.index);
router.post(`/`, checkCType, starCtlr.create);
router.get(`/:id`, checkCType, starCtlr.show);
router.put(`/:id`, checkCType, starCtlr.update);
router.delete(`/:id`, checkCType, starCtlr.remove);

// export "router"
module.exports = router;
