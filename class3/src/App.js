import './App.css';
// import MyComponent from './myComponents';
import Ex1 from './Components/Ex1';
import Ex2 from './Components/Ex2';
import Ex3 from './Components/Ex3';
import Ex4 from './Components/Ex4';


function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='bg-primary'>This is app Component...! (Parent Components)</h1>
        </div>
      </div>
      {/* <MyComponent></MyComponent> */}
      <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4>
    </div>
  );
}

export default App;
