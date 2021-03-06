import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { getCount } from './actions.js'
import { connect } from 'react-redux'

import Home from './components/Home.js'
import Values from './components/Values.js'
import About from './components/About.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contact from './components/Contact';

function App({ location }, props) {

  React.useEffect(() => {
    if (window.CSS.registerProperty) {
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
    }
  }, [])

  React.useEffect(() => {
    getCount(1)
  },[])

  // console.log(window.location.pathname)

  return (
    <div className="App">
      {window.location.pathname !== '/' ? <Nav /> : null}

      <TransitionGroup className='transitionGroup'>
        <CSSTransition 
          key={location.key} 
          timeout={{ enter: 500, exit: 500 }}
          classNames={'fade'}
        >
          <section className='routeSection'>
            <Switch location={location}>
              <Route exact path='/' render={props => <Home {...props} /> } />
              <Route path='/about' render={props => <About {...props} /> } />
              <Route path='/values' render={props => <Values {...props} /> } />
              <Route path='/projects' render={props => <Projects {...props} /> } />
              <Route path='/resume' render={props => <Resume {...props} /> } />
              <Route path='/contact' render={props => <Contact {...props} /> } />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}



export default withRouter(connect(null,{getCount})(App));
