import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <p className='hello'>Hello, my name is <span className='name'>Theodore Feledy.</span></p>
        <Link to='/about' className='aboutLink'>
          <h3 className='homeLink'>Let's get started! <i className="fas fa-caret-right"></i></h3>
        </Link>
        <p className='hello'>I'm a Full Stack Web Developer.</p>
      </div>
    )
  }
}

export default Home