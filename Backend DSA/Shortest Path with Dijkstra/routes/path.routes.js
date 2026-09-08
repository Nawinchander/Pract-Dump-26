const express = require("express");

const {
  findShortestPath
} = require("../controllers/path.controller");

const router = express.Router();

router.post(
  "/shortest-path",
  findShortestPath
);

module.exports = router;


