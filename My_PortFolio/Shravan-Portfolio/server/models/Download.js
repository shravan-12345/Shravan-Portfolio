const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema(
  {
    ip: String,
    userAgent: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Download", downloadSchema);