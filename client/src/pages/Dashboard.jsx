// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>My Dashboard</h3>
        <div>
          <Link to="/create-project" className="btn btn-outline-primary me-2">
            New Project
          </Link>
          <Link to="/profile" className="btn btn-outline-secondary">
            Edit Profile
          </Link>
        </div>
      </div>

      <h5 className="mt-4">Latest Projects</h5>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div key={project._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-dark me-2"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
