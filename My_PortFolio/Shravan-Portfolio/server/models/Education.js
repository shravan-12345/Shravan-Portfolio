const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    cgpa: String,
    startYear: String,
    endYear: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);