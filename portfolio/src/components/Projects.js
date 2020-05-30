import React from 'react'

import Project from './Project'

import ffHomePage from '../images/ffhp.png'





class Projects extends React.Component {
  render() {
    return (
      <div className='Profile' id='Projects'>
        <h1 className='aboutHeader'>PROJECTS</h1>
        <div className='iconContainer'>
          <i className="fas fa-wave-square fa-lg"></i>
        </div>

        <div className='projectsContainer'>
          <div className='projectWrapper'>
            <Project project={ffHomePage} />
          </div>
        </div>
      </div>
      )
  }
}

export default Projects