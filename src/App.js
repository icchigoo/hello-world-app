import React from 'react';

function App() {
  const showAlert = () => {
    alert("Hello, World!");
  };

  const helloStyle = {
    color: 'blue',
    fontSize: '24px',
    backgroundColor: 'lightgray',  // Add a background color
    padding: '20px',  // Add some padding
    borderRadius: '8px',  // Add rounded corners
  };

  return (
    <div>
      <h1 style={helloStyle}>Hello World</h1>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
}

export default App;
