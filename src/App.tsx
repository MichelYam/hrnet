import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewEmployee from './pages/NewEmployee';
import ListEmployee from './pages/ListEmployee';

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/newEmployee' element={<NewEmployee />}/>
        <Route path='/listEmployee' element={<ListEmployee />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
