const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);