import React from 'react';
import react_logo from './logo_react.svg';
import amplify_logo from './logo_amplify.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
            <img src={react_logo} className="App-logo-react" alt="react logo" />
            <img src={amplify_logo} className="App-logo-amplify" alt="amplify logo" />
        </div>
        <p>
        Running React on AWS's Amplify made easy.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/amplify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AWS Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
