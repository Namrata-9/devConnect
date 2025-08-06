// src/pages/CreateProject.js
import React, { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function CreateProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/projects", form);
      toast.success("Project created!");
      setForm({ title: "", description: "", githubLink: "", liveLink: "" });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "550px" }}
      >
        <h3 className="text-center mb-4">Post a New Project</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input
              name="title"
              className="form-control"
              onChange={handleChange}
              value={form.title}
            />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              onChange={handleChange}
              value={form.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>GitHub Link</label>
            <input
              name="githubLink"
              className="form-control"
              onChange={handleChange}
              value={form.githubLink}
            />
          </div>
          <div className="mb-3">
            <label>Live Link</label>
            <input
              name="liveLink"
              className="form-control"
              onChange={handleChange}
              value={form.liveLink}
            />
          </div>
          <button className="btn btn-primary w-100">Submit Project</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
