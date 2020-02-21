import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home.js'
import About from './components/About.js'
import Nav from './components/Nav.js'

function App() {

  window.CSS.registerProperty({
    name: '--y',
    syntax: '<length-percentage>',
    initialValue: '20%',
    inherits: true
  })
  window.CSS.registerProperty({
    name: '--x',
    syntax: '<length-percentage>',
    initialValue: '20%',
    inherits: true
  })

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' render={props => <Home {...props} /> } />
        <Route path='/about' render={props => <About {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;
