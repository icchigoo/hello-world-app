import React from 'react';

function App() {
  // Create a function to show an alert
  const showAlert = () => {
    alert("Hello, World!");
  };

  // Create a style object to add color
  const helloStyle = {
    color: 'blue',
    fontSize: '24px',
  };

  return (
    <div>
      <h1 style={helloStyle}>Hello World</h1>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
}

export default App;
