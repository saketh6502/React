import React from 'react';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Body/Home';
import About from './Components/Body/About';
import Services from './Components/Body/Services';
import Contact from './Components/Body/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div>
      <Row>
        <Router>
          <Col sm={2} className='col1'>
            <Header/>
          </Col>
          <Col sm={10} className='col2'>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/services' exact Component={Services}/>
            <Route path='/contact' exact Component={Contact}/>
          </Routes>
          </Col>
      </Router>
      

      </Row>
    </div>
  );
}

export default App;
