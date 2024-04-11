/** @jsxRuntime classic */

import logo from './logo.svg';
import './App.css';
import React from './react';

function App() {
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)
  const [text, setText] = React.useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'red'}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onclick={()=>{setCount(count+1)}}>Click me</button>
        <h1>
          {count}
        </h1>
        <button onclick={()=>{setCount2(count+1)}}>Click me</button>
        <h1>
          {count2}
        </h1>
        <input onchange={(e)=>{setText(e.target.value)}}/>
        <p>{text}</p>
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
