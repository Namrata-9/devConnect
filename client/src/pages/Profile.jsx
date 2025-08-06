// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Profile() {
  const [form, setForm] = useState({
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profiles/me");
        setForm({
          bio: res.data.bio || "",
          skills: res.data.skills?.join(", ") || "",
          github: res.data.github || "",
          linkedin: res.data.linkedin || "",
        });
      } catch (err) {
        console.log("No existing profile", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/profiles", form);
      toast.success("Profile updated!");
    } catch (err) {
      toast.error("Profile update failed", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Your Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Bio</label>
            <textarea
              name="bio"
              className="form-control"
              rows="3"
              onChange={handleChange}
              value={form.bio}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Skills (comma separated)</label>
            <input
              name="skills"
              className="form-control"
              onChange={handleChange}
              value={form.skills}
            />
          </div>
          <div className="mb-3">
            <label>GitHub URL</label>
            <input
              name="github"
              className="form-control"
              onChange={handleChange}
              value={form.github}
            />
          </div>
          <div className="mb-3">
            <label>LinkedIn URL</label>
            <input
              name="linkedin"
              className="form-control"
              onChange={handleChange}
              value={form.linkedin}
            />
          </div>
          <button className="btn btn-success w-100">Save Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
