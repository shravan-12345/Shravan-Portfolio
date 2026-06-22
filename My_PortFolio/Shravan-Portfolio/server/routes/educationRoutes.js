const express = require("express");
const router = express.Router();

const Education = require("../models/Education");
const authMiddleware = require("../middleware/authMiddleware");

// Create Education
router.post("/", authMiddleware, async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Education
router.get("/", async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Education
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Education
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);

    res.json({
      message: "Education Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;