import React from 'react'

import Project from './Project'
import Counter from './Counter.js'

import ffHomePage from '../images/ffhp.png'
import g2itHome from '../images/g2ihome.png'





class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  toggleHover = () => {
    this.setState(prevState => ({
      hover: !prevState.hover
    }))
  }



  render() {
    return (
      <div className='Profile' id='Projects'>
        <h1 className='aboutHeader'>PROJECTS</h1>
        <div className='iconContainer'>
          <i className="fas fa-wave-square fa-lg"></i>
        </div>

        <div className='projectsContainer'>
          <div className='projectWrapper'>
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              {
                this.state.hover ?
                <div className='hoverContainer'>
                  <div className='hoveredProject'>
                    <div className='ffHovered'>
                      <div className='projectHead'>
                        <h2 className='projectName'>FoodieFun</h2>
                        <h3 className='projectDate'>July 2019</h3>
                      </div>
                      <div className='projectStack'>
                        <p className='projectStackElement'>React</p>
                        <p className='projectStackElement'>Redux</p>
                      </div>
                      <p className='projectDescription'>This was my very first Front-End project, that I created on my own. It was built as a build-week project for Lambda School.</p>
                      <div className='gitDiv'><i className="fab gitIcon fa-github"></i> <a className='repoLink' href='https://github.com/build-week-foodiefun/Front-End/tree/TJ-Feledy'>https://github.com/build-week-foodiefun/Front-End/tree/TJ-Feledy</a></div>
                    </div>
                  </div>
                </div>
                : <Project project={ffHomePage}/>
              }
            </div>
            <Project project={g2itHome} />
          </div>
        </div>
        <Counter />
      </div>
      )
  }
}

export default Projects