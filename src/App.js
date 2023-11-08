import React, { useState } from 'react'; 
import './App.css'; 
 
function App() { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
 
  const handleLogin = () => { 
    // Perform authentication logic (e.g., compare with hardcoded values) 
    if (username === 'user' && password === 'password') { 
      setIsAuthenticated(true); 
    } else { 
      setIsAuthenticated(false); 
      alert('Invalid credentials. Please try again.'); 
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
            value={password} 
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
 