// NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/table">Table Page</Link>
        </li>
        <li>
          <Link to="/form-elements">Form Elements Page</Link>{" "}
        </li>
      </ul>

      <hr />
    </div>
  );
}

export default NavigationBar;
