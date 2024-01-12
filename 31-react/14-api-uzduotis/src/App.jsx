import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Todos from './components/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
             <Route path='/comments' element={<Comments />} />
            <Route path='/todos' element={<Todos />} />  
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;