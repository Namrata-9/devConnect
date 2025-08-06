const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createOrUpdateProfile,
  getMyProfile,
  getAllProfiles,
} = require("../controllers/profileController");

router.post("/", auth, createOrUpdateProfile);
router.get("/me", auth, getMyProfile);
router.get("/", getAllProfiles);

module.exports = router;
