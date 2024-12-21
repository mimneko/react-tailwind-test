import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center">
        <img src={logo} className="w-32 h-32 mb-4" alt="logo" />
        <p className="text-lg text-gray-700">
          Edit <code className="font-mono text-blue-500">src/App.js</code> and save to reload.
        </p>
        <p className="text-lg text-gray-700">あなたがいないと生きていけない</p>
        <a
          className="mt-4 text-blue-600 hover:text-blue-800"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


