import React from 'react'
import me from '../images/me.jpg'


class Skills extends React.Component {
  render() {
    return (
      <div className='About'>
        <h1 className='skillsHeader'>ABOUT</h1>
        <div className='iconContainer'>
          <i className="fas fa-wave-square fa-lg"></i>
        </div>
        <div className='infoContainer'>
          <div className='meContainer'>
            <img src={me} className='meImg' alt='Handsome Man' />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Skills