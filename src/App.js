import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>Buddy counter with error boundary</p>
                <ErrorBoundary>
                    <BuggyComponent/>
                </ErrorBoundary>
                <p>Buddy counter without error boundary</p>
                <BuggyComponent/>
            </header>
        </div>
    );
}

export default App;
