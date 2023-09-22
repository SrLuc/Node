const express = require("express");
const route = express.Router();
const DUMMY_PLACES = require("../models/data-model.js");

// Route Place Test
route.get("/placetest", (req, res, next) => {
  res.json({ message: "Place router Works!" });
});

// Route Get all Places
route.get("/place", (req, res, next) => {
  const places = DUMMY_PLACES;
  res.json({ places });
});

// Route Get Place by ID
route.get("/place/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided id.");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
});

module.exports = route;
