const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile");
const authMiddleware = require("../middleware/authMiddleware");

// Create Profile
router.post("/", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.create(req.body);

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Profile
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Profile
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;