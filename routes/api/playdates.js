const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Playdate = require('../../models/Playdates');


router.get("/", (req, res) => {
  res.json({
    msg: "This is the playdates route",
  });
});

module.exports = router;