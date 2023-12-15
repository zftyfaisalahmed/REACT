import React, { useState } from 'react'

const Ex1 = () => {

    const [counter, setCounter] = useState(0)

    const [title, setTitle] = useState("welcome to react state")

    const [isView, setView] = useState(true)

    const [user, setUseer] = useState({
        name : "Raju",
        email : "raju2gmail.com"
    })

    const [colors, setcolors] = useState(['red', 'blue', 'green']);


    const [inputValue, setInput] = useState("React")
    let count = 0;

    const increament = () => {
      count += count + 1;
      console.log(count);
      setCounter(counter+1)
      setView(!isView)
    }
  
    const onChange = (event) => {
        const newValue = event.target.value;
        // console.log(newValue)
        setInput(newValue)
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-center display-3">
                    State Hooks
                </h1>
                <p className='text-secondary text-uppercase text-center'>
                    That allows you to have a state varibles in funtional components
                </p>
            </div>
        </div>
        <hr />
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded">
            <h3>Example - 1</h3>
            <p><b>Count = </b>{count}</p>
            <button type='button' className='btn btn-outline-success' onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded">
            <h3>Example - 2</h3>
            <p><b>Count = </b>{counter}</p>
            <button type='button' className='btn btn-outline-success' onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded">
            <h3>Example - 3</h3>
            <p className='text-uppercase'><b>Title = </b>{title}</p>
            <p><b>isView = </b>{isView ? "con" : "null"}</p>
            <button type='button' className='btn btn-outline-success' onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded">
            <h3>Example - 4</h3>
            <p><b>Colors =</b>{colors}</p>
            <p><b>Colors =</b>{colors && colors.map((item, index)=>{
              return (<p key={index}>{item}</p>);
            })}</p>
          </div>
        </div>
      </div>
      <div className="row">
            <div className="col">
                <div className="lead p-3 border rounded my-3">
                    <h3>Example - 5</h3>
                    <p><b>User name = </b>{user.name}</p>
                    <p><b>User email = </b>{user.email}</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="lead p-3 border rounded my-3">
                    <h3>Example - 6</h3>
                    <input type="text" name="name" id="name" placeholder='Enter some text' className='form-control' onChange={onChange} />
                    <p><b>Input Value = </b>{inputValue}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex1