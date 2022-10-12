import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home'
import Test from './components/test';

import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function App() {
  const [test, setTest] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/test')
    .then((res) => res.json())
    .then((data) => {
      setTest(data)
    })
  }, [])


   console.log(test)
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Hello! Welcome to the website</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/">
                <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"newPage"}>
                  <Link to="/test">Test</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>
      

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;