import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import TablePage from "./TablePage";
import FormElementsPage from "./FormElementsPage";

function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic (e.g., compare with hardcoded values)
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      navigate("/table"); // Navigate to the table page on successful login
    } else {
      setIsAuthenticated(false);
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={username}
              isAuthenticated={isAuthenticated}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
              handleLogin={handleLogin}
            />
          }
        />
        <Route path="/table" element={<TablePage />} />
        <Route path="/form-elements" element={<FormElementsPage />} />{" "}
      </Routes>
    </div>
  );
}

function Home({
  username,
  isAuthenticated,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
}) {
  // Remove the 'password' state from here
  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <p>You are logged in as {username}.</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            // Use the handlePasswordChange function to update the password
            onChange={handlePasswordChange}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
