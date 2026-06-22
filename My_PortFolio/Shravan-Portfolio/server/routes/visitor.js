const express = require("express");
const router = express.Router();

const Visitor = require("../models/Visitor");

// Track Visitor
router.post("/", async (req, res) => {
  try {
    const visitor = await Visitor.create({});

    res.status(201).json(visitor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Total Visitors
router.get("/", async (req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();

    res.json({
      totalVisitors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;