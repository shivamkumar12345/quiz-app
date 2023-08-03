import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/home';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </Router>
     

    </div>
  );
}

export default App;
