import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu';
import Login from './Components/Login';
import Register from './Components/Register';
import Pnf from './Components/Pnf'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
        <Menu></Menu>
        <ToastContainer autoClose= {4000} position={'top-right'}></ToastContainer>
      <Routes>
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
        <Route path={"/*"} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
