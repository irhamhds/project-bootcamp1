import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (  
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Product />} path='/Product' />
      <Route element ={<Contact />} path='/Contact'/>
    </Routes>

  );
}

export default App;
