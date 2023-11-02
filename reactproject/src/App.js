
import './App.css';

import Nav from './Components/NavBar';
import Home from './Components/Homepage';
import Feature from './Components/Features';
import Trend from './Components/Trends';
import Categ from './Components/categories';
import Shop from './Components/Shop';
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <Feature></Feature>
      <Trend></Trend>
      <Categ></Categ>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
