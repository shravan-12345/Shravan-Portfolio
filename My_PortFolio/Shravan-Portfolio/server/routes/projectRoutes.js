const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

// Create Project
router.post("/", authMiddleware, async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Project
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Project
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;