const express = require("express");
const router = express.Router();

const Skill = require("../models/Skill");
const authMiddleware = require("../middleware/authMiddleware");


// Create Skill
router.post("/", authMiddleware, async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get All Skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();

    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Update Skill
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Delete Skill
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);

    res.json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;