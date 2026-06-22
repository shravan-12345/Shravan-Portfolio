const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    github: String,
    linkedin: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);