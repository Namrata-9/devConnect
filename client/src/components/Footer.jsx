import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">DevConnect</h5>
            <p>
              A platform to showcase developer projects, collaborate, and
              connect with tech enthusiasts around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white text-decoration-none">
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p>Email: support@devconnect.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pune, India</p>
          </div>
        </div>

        <hr className="text-white" />

        <div className="text-center">
          &copy; {new Date().getFullYear()} DevConnect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
