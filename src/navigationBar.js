// navigationBar.js

import React from "react";
import { Link } from "react-router-dom";
import "./navigationBar.css"; // Import the associated CSS file

function NavigationBar() {
  return (
    <div className="navbar-container">
      {/* Navigation bar list with links */}
      <ul className="navbar-list">
        {/* Individual navigation bar items */}
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/table" className="navbar-link">
            Table Page
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/form-elements" className="navbar-link">
            Form Elements Page
          </Link>{" "}
        </li>
      </ul>

      {/* Divider line to separate sections of the navigation bar */}
      <hr className="navbar-divider" />
    </div>
  );
}

export default NavigationBar;
