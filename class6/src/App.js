import logo from './logo.svg';
import './App.css';
import { Fragment } from "react";

function App() {
  return <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
              <h1 className='display-3 text-center text-warnibg'>
                Handling events in React Component
              </h1>

              <div className='lead my-3 p-3 border'>
                <p><b> 1) Call an inline function in an onclick handler </b></p>
                <button className='btn btn-outline-info' onClick={()=>{
                  alert("Hello")
                }}>Click-app</button>
              </div>
          </div>
        </div>
      </div>
  </Fragment>
}

export default App;
