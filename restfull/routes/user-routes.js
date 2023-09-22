const express = require("express");

const route = express.Router();

route.get("/user", (req, res, next) => {
  res.json({ message: "User Router Works!" });
});

module.exports = route;
