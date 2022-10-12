import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React from "react";
import './App.css';
import Home from './components/home';
import Test from './components/test';
import Bar from './components/navbar';

function App() {
  return (
    <Router>
    <div className="App">
        <Bar />
        <Home />
        <Test />

    <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;