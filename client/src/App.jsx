// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import AllProjects from "./pages/AllProjects";
import Profile from "./pages/Profile";
// import ProjectDetails from "./pages/ProjectDetails"; // Optional route for individual project

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div className="min-height-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
