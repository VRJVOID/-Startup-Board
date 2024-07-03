// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
