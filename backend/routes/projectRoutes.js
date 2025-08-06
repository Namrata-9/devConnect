const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createProject,
  getAllProjects,
  getProjectByUser,
  searchProjectsOrUsers,
} = require("../controllers/projectController");

router.post("/", auth, createProject);
router.get("/", getAllProjects);
router.get("/user/:userId", getProjectByUser);
router.get("/search", searchProjectsOrUsers);

module.exports = router;
