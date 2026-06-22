require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const educationRoutes = require("./routes/educationRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const skillRoutes = require("./routes/skill");
const profileRoutes = require("./routes/profile");
const visitorRoutes = require("./routes/visitor");
const analyticsRoutes = require("./routes/analytics");
const certificationRoutes = require("./routes/certificationRoutes");

const app = express();

// Database Connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/visitor", visitorRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/certifications",certificationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running On Port ${PORT}`);
});