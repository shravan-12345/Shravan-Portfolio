const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Contact = require("../models/Contact");
const Download = require("../models/Download");
const Visitor = require("../models/Visitor");
const Skill = require("../models/Skill");
const Experience = require("../models/Experience");
const Education = require("../models/Education");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.countDocuments();
    const blogs = await Blog.countDocuments();
    const contacts = await Contact.countDocuments();
    const skills = await Skill.countDocuments();
    const experiences = await Experience.countDocuments();
    const educations = await Education.countDocuments();

    const downloads = await Download.countDocuments();
    const visitors = await Visitor.countDocuments();

    const now = new Date();

    // Today
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    // Week
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 7);

    // Month
    const startOfMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    const todayDownloads = await Download.countDocuments({
      downloadedAt: { $gte: startOfDay },
    });

    const weeklyDownloads = await Download.countDocuments({
      downloadedAt: { $gte: startOfWeek },
    });

    const monthlyDownloads = await Download.countDocuments({
      downloadedAt: { $gte: startOfMonth },
    });

    const todayVisitors = await Visitor.countDocuments({
      visitedAt: { $gte: startOfDay },
    });

    const weeklyVisitors = await Visitor.countDocuments({
      visitedAt: { $gte: startOfWeek },
    });

    const monthlyVisitors = await Visitor.countDocuments({
      visitedAt: { $gte: startOfMonth },
    });

    res.status(200).json({
      projects,
      blogs,
      contacts,
      skills,
      experiences,
      educations,

      downloads,
      todayDownloads,
      weeklyDownloads,
      monthlyDownloads,

      visitors,
      todayVisitors,
      weeklyVisitors,
      monthlyVisitors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;