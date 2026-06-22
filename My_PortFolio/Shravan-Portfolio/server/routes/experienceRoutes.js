const express = require("express");
const router = express.Router();

const Experience = require("../models/Experience");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);

    res.json({
      message: "Experience Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;