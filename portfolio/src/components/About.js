import React from 'react'
import me from '../images/me.jpg'


class About extends React.Component {
  render() {
    return (
      <div className='Profile'>
        <h1 className='aboutHeader'>ABOUT</h1>
        <div className='iconContainer'>
          <i className="fas fa-wave-square fa-lg"></i>
        </div>
        <div className='infoContainer'>
          <div className='meWrapper'>
            <div className='meContainer'>
              <img src={me} className='meImg' alt='Handsome Man' />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default About