import './App.css';
// import MyComponent from './myComponents';
import Ex1 from './Components/Ex1';
import Ex2 from './Components/Ex2';
import Ex3 from './Components/Ex3';
import Ex4 from './Components/Ex4';
import Ex5 from './Components/Ex5';
import Ex6 from './Components/Ex6';
import Ex7 from './Components/Ex7';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='bg-primary p-3 text-center text-white'>This is app Component...! (Parent Components)</h1>
        </div>
      </div>
      {/* <MyComponent></MyComponent> */}
      <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4>
      <Ex5 img="https://media.voguebusiness.com/photos/61fd0c44fd855c197a6d5e53/2:3/w_2560%2Cc_limit/nike-voguebus-Edward-Berthelot_Getty-Images-feb-21-story.jpg" name="Nike" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut quos labore consequuntur veniam id illo nulla, eum culpa soluta voluptatum expedita esse nam laborum qui rerum corporis, doloremque laboriosam."></Ex5>
      <Ex6 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwd6kz_SkRL5C_pOGergV28gDcAe-1-57tSQ&usqp=CAU" name="Nisha rao" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut quos labore consequuntur veniam id illo nulla, eum culpa soluta voluptatum expedita esse nam laborum qui rerum corporis, doloremque laboriosam."></Ex6>
      <Ex7></Ex7>
    </div>
  );
}

export default App;
