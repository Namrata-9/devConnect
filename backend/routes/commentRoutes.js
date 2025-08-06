const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  addComment,
  getCommentsForProject,
} = require("../controllers/commentController");

router.post("/", auth, addComment);
router.get("/:projectId", getCommentsForProject);

module.exports = router;
