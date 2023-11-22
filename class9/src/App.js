import React from 'react';
import Menu from './Components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./Components/Music"
import Contact from "./Components/Contact"
import Track from "./Components/Track"
import Pnf from "./Components/Pnf"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
          <Route path={'/Music'} element={<Music />}/>
          <Route path={'/contact'} element={<Contact />}/>
          <Route path={'/track'} element={<Track />}/>
          <Route path={'/*'} element={<Pnf />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
