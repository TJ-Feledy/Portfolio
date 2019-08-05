import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <p className='hello'>Hello, my name is <span className='name'>Theodore Feledy.</span></p>
        <Link className='homeLink' to='/about'>Click Me! <i className="fas fa-caret-right"></i></Link>
      </div>
    )
  }
}

export default Home