import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      
      <Route path='/' render={props => <Home {...props} /> } />
      <Route path='/about' render={props => <About {...props} /> } />
    </div>
  );
}

export default App;
