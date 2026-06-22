const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    issuer: {
      type: String,
      required: true,
    },

    issueDate: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    credentialUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Certification",
  certificationSchema
);