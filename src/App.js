import './App.css';

function App() {
  const displayHelloWorld = () => {
    alert('Hello, World!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, World!</p>
        <button
          onClick={displayHelloWorld}
          style={{
            backgroundColor: 'blue', // Change button background color
            color: 'white', // Change button text color
            padding: '10px', // Adjust button padding
            borderRadius: '5px', // Add rounded corners
            cursor: 'pointer', // Change cursor on hover
          }}
        >
          Show Hello, World
        </button>
      </header>
    </div>
  );
}

export default App;
