import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Register from './Components/Register';
import Pnf from './Components/Pnf';
import { ToastContainer } from 'react-toastify';
// import Home from "./components/Home";
// import ProtectedRoute from './authGaurd/ProtectedRoute';
// import { Route } from 'react-router-dom';
// import Create from './components/Create';
// import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-right'}/>
      <Routes>
        {/* <Route element={<ProtectedRoute></ProtectedRoute>}>
        </Route> */}
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/*'} element={<Pnf />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
