import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={props => <Home {...props} /> } />
        <Route path='/about' render={props => <About {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;
