const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const authMiddleware = require("../middleware/authMiddleware");

// Visitor Submit Message
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Admin View Messages
router.get("/", authMiddleware, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Delete Message
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      message: "Message Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;