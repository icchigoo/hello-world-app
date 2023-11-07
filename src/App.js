import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(''); // Initialize the state for the text field

  const showAlert = () => {
    alert("Hello, World!");
  };

  const helloStyle = {
    color: 'blue',
    fontSize: '24px',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '8px',
  };

  const handleTextChange = (e) => {
    // Update the 'text' state when the text field value changes
    setText(e.target.value);
  };

  return (
    <div>
      <h1 style={helloStyle}>Hello World</h1>
      <button onClick={showAlert}>Show Alert</button>
      
      {/* Add a text field */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleTextChange}
      />
      
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;
