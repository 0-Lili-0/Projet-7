import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='Apropos' element={<About />} />
        <Route path='logement/:id' exact element={<FicheLogement />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
  );
};

export default App;
