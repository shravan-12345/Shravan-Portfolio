const express = require("express");
const router = express.Router();
const path = require("path");

const upload = require("../middleware/uploadResume");
const authMiddleware = require("../middleware/authMiddleware");
const Download = require("../models/Download");

// Upload Resume
router.post(
  "/upload",
  authMiddleware,
  upload.single("resume"),
  (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      res.json({
        message: "Resume Uploaded Successfully",
        file: req.file.filename,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Download Resume
router.get("/download", async (req, res) => {
  try {
    // store download analytics
    await Download.create({
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    const filePath = path.join(
      __dirname,
      "../uploads/resumes/resume.pdf"
    );

    res.download(filePath, "resume.pdf", (err) => {
      if (err) {
        return res.status(500).json({
          message: "File download failed",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;