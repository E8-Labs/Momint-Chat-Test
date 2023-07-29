// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
// import Chat from './pages/Chat'
import MongoAuth from './pages/MongoLanding'
import { Link, useNavigate } from 'react-router-dom'
import CreatePromptTitle from './pages/CreatePromptTitle';
import CreatePromptTopic from './pages/CreatePromptTopic';
import PromptsList from './pages/PromptsList';
import ProfileBaseView from './components/Profile/Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Onboarding from './pages/onboarding/onboarding';
import image from './assets/bg-image.png'
import Onboarding2 from './pages/onboarding/onboarding2';
import AddUsername from './pages/onboarding/AddUsername';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color-dark-palette: #1a1a1a;
    --secondry-color-dark-palette: #373737;
    --blue-button-color: #3c95f4;
    --blue-active-color: #2070c6;
    --blue-gradient: linear-gradient(90deg, #3c95f4 65%, #3385dc 100%);
  }

  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--blue-gradient);
  }
`;

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mongoauth" element={<MongoAuth />} />
            <Route path="/" element={<Onboarding />} />
            <Route path="/createPrompt" element={<CreatePromptTitle />}></Route>
            <Route path="/createPromptTopic" element={<CreatePromptTopic />}></Route>
            <Route path="/prompts" element={<PromptsList />}></Route>
            <Route path="/profile" element={<ProfileBaseView />}></Route>
            <Route path="/onboarding" element={<Onboarding />}></Route>
            <Route path="/onboarding2" element={<Onboarding2 />}></Route>
            <Route path="/addusername" element={<AddUsername />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
