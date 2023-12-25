import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Pnf from './Components/Pnf';
import Home from './Components/Home';
import Users from './Components/Users';
import Comment from './Components/Comment';
import { ToastContainer } from 'react-toastify';
import Post from './Components/Post';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <ToastContainer autoClose={4000} position={'top-right'} />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Users'} element={<Users />} />
          <Route path={'/post'} element={<Post />} />
          <Route path={'/comment'} element={<Comment />} />
          <Route path={'/*'} element={<Pnf />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
