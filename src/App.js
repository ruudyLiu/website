import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Use https://github.com/facebook/react to build react
// Use https://github.com/gitname/react-gh-pages to deploy to GitHub Pages

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>*Website under construction*</p>
        <p>
          RL Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
