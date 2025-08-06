const Profile = require("../models/Profile");

exports.createOrUpdateProfile = async (req, res) => {
  const { bio, skills, github, linkedin } = req.body;
  try {
    const profileFields = {
      user: req.user,
      bio,
      skills: skills?.split(",").map((skill) => skill.trim()),
      github,
      linkedin,
    };

    let profile = await Profile.findOne({ user: req.user });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user }).populate("user", [
      "name",
      "email",
    ]);
    if (!profile) return res.status(404).json({ msg: "No profile found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "email"]);
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
