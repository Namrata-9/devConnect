// client/src/pages/AllProjects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState({});

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://devconnect-7ee7.onrender.com/api/projects");
      if (Array.isArray(res.data)) {
        setProjects(res.data);
      } else {
        toast.error("Projects data is not in array format");
      }
    } catch (error) {
      toast.error("Failed to fetch projects", error);
    }
  };

  const fetchComments = async (projectId) => {
    try {
      const res = await axios.get(
        `http://localhost:7878/api/comments/${projectId}`
      );
      setComments((prev) => ({ ...prev, [projectId]: res.data }));
    } catch (error) {
      toast.error("Failed to fetch comments", error);
    }
  };

  const handleCommentChange = (e, projectId) => {
    setCommentInput({ ...commentInput, [projectId]: e.target.value });
  };

  const handleAddComment = async (projectId) => {
    const message = commentInput[projectId];
    if (!message) return;

    try {
      await axios.post(
        "http://localhost:7878/api/comments",
        {
          projectId,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      fetchComments(projectId); // refresh comments
      setCommentInput({ ...commentInput, [projectId]: "" });
      toast.success("Comment added");
    } catch (error) {
      toast.error("Failed to add comment", error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-2 text-center">All Projects</h2>
      <h6 className="mb-4 text-center fw-normal">
        For post comment please login first
      </h6>
      {projects.map((project) => (
        <div key={project._id} className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <small className="text-muted">
              By {project.user?.name || "Unknown"}
            </small>

            {/* Comment Section */}
            <div className="mt-4">
              <h6>Comments</h6>
              <button
                className="btn btn-sm btn-outline-secondary mb-2"
                onClick={() => fetchComments(project._id)}
              >
                Load Comments
              </button>

              {comments[project._id]?.map((c) => (
                <div key={c._id} className="border rounded p-2 mb-2">
                  <strong>{c.user?.name || "User"}</strong>: {c.message}
                </div>
              ))}

              <div className="input-group mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  value={commentInput[project._id] || ""}
                  onChange={(e) => handleCommentChange(e, project._id)}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddComment(project._id)}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {projects.length === 0 && <p>No projects available.</p>}
    </div>
  );
}

export default AllProjects;
