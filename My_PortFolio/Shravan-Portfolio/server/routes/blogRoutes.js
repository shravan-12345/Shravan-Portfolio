const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

// Create Blog
router.post("/", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Blog
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Blog
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({ message: "Blog Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;