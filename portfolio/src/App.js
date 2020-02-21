import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      
      <Route path='/' render={props => <Home {...props} /> } />
      <Route path='/' render={props => <About {...props} /> } />
    </div>
  );
}

export default App;
