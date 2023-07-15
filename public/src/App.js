// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import MongoAuth from './pages/MongoLanding'
import { Link, useNavigate } from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mongoauth" element={<MongoAuth />} />
            <Route path="/" element={<Chat />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
