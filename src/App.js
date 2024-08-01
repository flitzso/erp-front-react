import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Sidebar from './components/SideBar';
import NavBar from './components/NavBarErp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;