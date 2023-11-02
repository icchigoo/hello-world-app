import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {loginSuccess && (
            <div className="success-message">
              <p>Login Success!</p>
              <p>Username: {username}</p>
              <p>Password: {password}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
