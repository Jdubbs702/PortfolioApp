const express = require("express");
const projectController = require("../controllers/project");

const router = express.Router();

router.get("/", projectController.getProjectData);

module.exports = router;
