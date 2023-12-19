import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Ex1 from './Components/Ex1';
import Ex8 from './Components/Ex8';
import Ex6 from './Components/Ex6';
import Ex5 from './Components/Ex5';
import Ex4 from './Components/Ex4';
import Ex3 from './Components/Ex3';
import Ex2 from './Components/Ex2';
import Ex7 from './Components/Ex7';
import Ex9 from './Components/Ex9';
import Pnf from './Components/Pnf';

function App() {
  return (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path={'/Ex1'} element={<Ex1 />}/>
      <Route path={'/Ex2'} element={<Ex2 />}/>
      <Route path={'/Ex3'} element={<Ex3 itemsPerPage={9} />}/>
      <Route path={'/Ex4'} element={<Ex4 itemsPerPage={5} />}/>
      <Route path={'/Ex5'} element={<Ex5 />}/>
      <Route path={'/Ex6'} element={<Ex6 />}/>
      <Route path={'/Ex7'} element={<Ex7 />}/>
      <Route path={'/Ex8'} element={<Ex8 />}/>
      <Route path={'/Ex9'} element={<Ex9 />}/>
      <Route path={'/*'} element={<Pnf />}/>
    </Routes>
  </BrowserRouter>    
  );
}

export default App;
