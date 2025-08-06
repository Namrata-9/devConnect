const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    githubLink: String,
    liveLink: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
