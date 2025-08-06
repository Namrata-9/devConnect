// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
function Home() {
  return (
    <div
      className="container text-center mt-5"
      style={{ marginBottom: "120px" }}
    >
      <h1 className="display-4">
        Welcome to <span className="text-primary">DevConnect</span>
      </h1>
      <p className="lead mt-3">
        Connect with developers, showcase your projects, and grow together.
      </p>
      <div className="mt-4">
        <Link to="/signup" className="btn btn-primary btn-lg mx-2">
          Get Started
        </Link>
        <Link to="/projects" className="btn btn-outline-secondary btn-lg mx-2">
          Explore Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
