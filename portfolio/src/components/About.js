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
          <div className='techStack'>
            <h2 className='techHeader'>Tech-Stack</h2>
            <div className='techContainer'>
              <div className='frontContainer'>
                <h3 className='techHeader'>Front-End</h3>
              </div>
              <div className='backContainer'>
                <h3 className='techHeader'>Back-End</h3>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default About