import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import { ToastContainer } from 'react-toastify';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Pnf from './Components/Pnf';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={3000} position={'top-right'}/>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/create'} element={<Create />}/>
        <Route path={'/update/id'} element={<Update />}/>
        <Route path={'/*'} element={<Pnf />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App