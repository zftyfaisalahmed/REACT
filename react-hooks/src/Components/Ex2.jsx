import React, {useReducer, useState} from 'react'

// Example-2
const reducer = (state, action) => {
  switch(action.type){
    case "INCREAMENT" :
      return{count:state.count+1, showText:state.showText}
    case "TOGGLESHOWTEXT":
      return{count:state.count, showText: !state.showText}
    default:
      return state // Return Empty state
  }
}

// Example-3
// Initial State
const initialState = { width: 50 };

// reduce action and state logic
const reduce = (states, action) => {
  try {
    switch (action) {
      case "plus":
        return { width: states.width + 10 };
      case "minus":
        return { width: Math.max(states.width - 10) };
      default:
        throw new Error("Sorry, Not a valid action..");
    }
  } catch (error) {
    console.log(error.message);
  }
};
const Ex2 = () => {
  const [counter, setCounter] = useState(0);
  const [isView, setIsView] = useState(true);

  /* const [state,dispatcher] = useReducer(reducer,initialstate or InitialValue)
  State = Is used for declare variables or states of function
  dispatcher = 1) Is used for call state Object.
              2) Helps to passing an action constants through dispatcher
  reducer = 1) Is a function, is used for handle the actions. 
            2) Action is used for to determine what kind of action try to take */

  const [state, dispatcher] = useReducer(reducer, {count:0, showText:true});
  const [states, dispatch] = useReducer(reduce, initialState);

  const increment = () => {
    setCounter(counter+1);
    setIsView(!isView);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3 ">useReducer Hook</h5>
          <p className="text-secondary">
          useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
          </p>
          <p>useReducer also lets you optimize performance for components that trigger deep updates.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
          <h3>Example - 1</h3>
          <p><b>Counter = </b>{counter}</p>
          <p><b>isView = </b>{isView ? "Condition is True..!" : "Condition is False..!"}</p>
          <button type="button" className="btn btn-outline-success" onClick={increment}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 2</h3>
            <p><b>Count = </b>{state.count}</p>
            <p><b>ShowText = </b>{state.showText && "This is True Condition"}</p>
            <button type="button" className="btn btn-outline-success" onClick={()=>{
              dispatcher({type: 'INCREAMENT'});
              dispatcher({type: 'TOGGLESHOWTEXT'});
            }}>Reducer</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 3</h3>
            <article className="bg-success" style={{ width: states.width }}>
              Article
            </article>
            <button className="btn btn-outline-success" onClick={() => dispatch("plus")}>
              Increase
            </button>
            <button
              className="btn btn-outline-danger float-end"
              onClick={() => dispatch("minus")}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex2
