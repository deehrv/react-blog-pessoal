import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './companents/estaticos/login/Login';
import Navbar from './companents/estaticos/navbar/Navbar';
import Footer from './companents/estaticos/footer/Footer';
import Home from './companents/estaticos/home/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
