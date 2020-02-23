import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './components/Home.js'
import About from './components/About.js'
import Nav from './components/Nav.js'

function App({ location }) {

  React.useEffect(() => {
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
  }, [])

  return (
    <div className="App">
      <Nav />
      <TransitionGroup>
        <CSSTransition 
          key={location.key} 
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route exact path='/' render={props => <Home {...props} /> } />
            <Route path='/about' render={props => <About {...props} /> } />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
