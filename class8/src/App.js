import React, { Component, Fragment } from 'react';
import Counter from './Components/Counter';
import  ReactDOM  from 'react-dom';

class App extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    // this.state = {
    //   name : "Mounting phase"
    // }
  }

  mount(){
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps = {0}></Counter>
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }

  unmount(){
    console.log("Component Unmounted")
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"))
  }

  render(){
    return (
      <Fragment>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="display-3 text-success text-center">
                  LIFECYCLE
                </h1>
                <hr />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                {/* <p>{this.state.name}</p> */}
                <button className="btn btn-outline-success" onClick={this.mount.bind(this)}>
                Mount
                </button>
                <button className="btn btn-outline-danger float-end" onClick={this.unmount.bind(this)}>
                UnMount
                </button>
                <hr />
              </div>
            </div>
          </div>
          <section id='renderHere'></section>
          {/* <Counter></Counter> */}
      </Fragment>
      );
  }

}

export default App;
