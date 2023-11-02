import './App.css';

function App() {
  const displayHelloWorld = () => {
    alert('Hello, World!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, World!</p>
        <button onClick={displayHelloWorld}>Show Hello, World</button>
      </header>
    </div>
  );
}

export default App;
