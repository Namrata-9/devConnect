const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const { projectId, message } = req.body;
  try {
    const comment = new Comment({
      project: projectId,
      user: req.user,
      message,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getCommentsForProject = async (req, res) => {
  try {
    const comments = await Comment.find({ project: req.params.projectId })
      .populate("user", ["name"])
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
