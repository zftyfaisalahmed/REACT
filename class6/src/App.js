import './App.css';
import { Fragment } from "react";
import Ex1 from './Components/Ex1';
import Ex2 from './Components/Ex2';
import Ex3 from './Components/Ex3';
import Ex4 from './Components/Ex4';

function App() {
  return <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
              <h1 className='display-3 text-center text-warning'>
                Handling events in React Component
              </h1>

              <div className='lead my-3 p-3 border'>
                <p><b> (1) Call an inline function in an onclick handler </b></p>
                <button className='btn btn-outline-info' onClick={()=>{
                  alert("Hello")
                }}>Click-app</button>
              </div>
          </div>
        </div>
      </div>
      <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4>
  </Fragment>
}

export default App;
