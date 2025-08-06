const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { title, description, githubLink, liveLink } = req.body;
  try {
    const project = new Project({
      user: req.user,
      title,
      description,
      githubLink,
      liveLink,
    });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("user", ["name"]);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getProjectByUser = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.params.userId });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.searchProjectsOrUsers = async (req, res) => {
  const { keyword } = req.query;
  try {
    const projects = await Project.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    }).populate("user", ["name"]);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
