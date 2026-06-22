const express = require("express");
const router = express.Router();

const Certification = require("../models/Certification");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", async (req, res) => {
  const certifications = await Certification.find().sort({
    createdAt: -1,
  });

  res.json(certifications);
});

router.post("/", authMiddleware, async (req, res) => {
  const certification =
    await Certification.create(req.body);

  res.status(201).json(certification);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const certification =
    await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(certification);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Certification.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Certification deleted",
  });
});

module.exports = router;