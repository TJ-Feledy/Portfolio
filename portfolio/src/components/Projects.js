import React from 'react'
import { Link } from 'react-router-dom'

import Project from './Project'
import Counter from './Counter.js'
import NetworkLinks from './NetworkLinks.js'

import ffHomePage from '../images/ffhp.png'
import g2itHome from '../images/g2ihome.png'





class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover1: false,
      hover2: false,
      contact: false
    }
  }

  toggleHover1 = () => {
    this.setState(prevState => ({
      hover1: !prevState.hover1
    }))
  }
  toggleHover2 = () => {
    this.setState(prevState => ({
      hover2: !prevState.hover2
    }))
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        contact: true
      })
    }, 10000)
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
            <div onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>
              {
                this.state.hover1 ?
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
                      <p className='projectDescription'>This was my very first Front-End project that I created on my own. It was built as a one week project for Lambda School. Some features include: Add, update, delete, rate a meal, and filter meals by category or rating.</p>
                      <p className='deployedTo'><i className="far pointRight fa-hand-point-right"></i>Check it out here: <a className='deployLink' href="https://foodie-fun-front-end.netlify.app/">foodie-fun-front-end.netlify.app/</a></p>
                      <div className='gitDiv'><i className="fab gitIcon fa-github"></i> <a className='repoLink' href='https://github.com/build-week-foodiefun/Front-End/'>https://github.com/build-week-foodiefun/Front-End/</a></div>
                    </div>
                  </div>
                </div>
                : <Project className='project1' project={ffHomePage}/>
              }
            </div>
            <div onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
              {
                this.state.hover2 ?
                <div className='hoverContainer'>
                  <div className='hoveredProject'>
                    <div className='ffHovered'>
                      <div className='projectHead'>
                        <h2 className='projectName'>Get2It</h2>
                        <h3 className='projectDate'>Dec 2019 - Jan 2020</h3>
                      </div>
                      <div className='projectStack'>
                        <p className='projectStackElement'>React</p>
                        <p className='projectStackElement'>Redux</p>
                      </div>
                      <p className='projectDescription'>I was part of a 3 person team on the Front-End portion of this todo app. Some features include: Create tasks, edit tasks, delete tasks, mark tasks as completed, and in-app notifications.</p>
                      <p className='deployedTo'><i className="far pointRight fa-hand-point-right"></i>Check it out here: <a className='deployLink' href="get2it.netlify.app">get2it.netlify.app</a></p>
                      <div className='gitDiv'><i className="fab gitIcon fa-github"></i> <a className='repoLink' href='https://github.com/TJ-Feledy/Get2It'>https://github.com/TJ-Feledy/Get2It</a></div>
                    </div>
                  </div>
                </div>
                : <Project className='project2' project={g2itHome} />
              }
            </div>
          </div>
        </div>
        {
          this.state.contact ?
          <div className='bioLink projectLink'>
            <i className="far bioPointRight projectPointRight fa-hand-point-right"></i>
            <span className='bioLineLink'><Link className='bioContact projectContact' to='/contact'>If you like what you see, please contact me here!</Link></span>
          </div> : null
        }
        <Counter />
        <NetworkLinks />
      </div>
      )
  }
}

export default Projects