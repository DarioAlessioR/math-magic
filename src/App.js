import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Navbar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/math-magicians" element={<Home />} />
              <Route path="/Calculator" element={<Calculator />} />
              <Route path="/Quote" element={<Quote />} />
            </Routes>
          </section>
        </Router>
      </>
    );
  }
}

export default App;
