import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const data = async () => {
    await 
    axios.get("/blogs")
    .then((res) => {
      console.log(res)
    })
    .catch()
  };
  
  useEffect(()=>{
    data()
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
