import logo from './logo.svg';
import './App.css';
import MyComponent from './myComponents';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='bg-primary'>This is app Component...! (Parent Components)</h1>
        </div>
      </div>
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
