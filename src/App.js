
import React from 'react';
import Home from './pages/home';
import Chat from './pages/chat';
import Grid from './pages/grid';
import Login from './pages/login';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Table from './pages/table';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;
