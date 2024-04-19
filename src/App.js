import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Img from './components/Image generator/Img'; 
import Audio from './components/Image generator/Audio'; 
import Interface from './components/Image generator/Interface'; 

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/img" element={<Img />} />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
