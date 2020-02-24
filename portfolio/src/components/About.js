import React from 'react'
import me from '../images/me.jpg'
import reduxImg from '../images/redux.png'
import lambda from '../images/lambda-logo.png'
import sqlite from '../images/sqlite.png'


class About extends React.Component {
  render() {
    return (
      <div className='Profile'>
        <h1 className='aboutHeader'>ABOUT</h1>
        <div className='iconContainer'>
          <i className="fas fa-wave-square fa-lg"></i>
        </div>
{/* main - page - info */}
        <div className='infoContainer'>
{/* Tech-Stack */}
          <div className='techStack'>
            <h2 className='techHeader stackHeader'>Tech-Stack</h2>
            <div className='techContainer'>
              <div className='frontContainer'>
                <h2 className='techHeader'>Front-End</h2>
                <div className='techInfoContainer'>
                  <div className='languageContainer'>
                    <p className='techName'><i className="fab fa-js-square techIcon js" /> - JAVASCRIPT</p>
                    <p className='techName'><i className="fab fa-react techIcon" /> - REACT</p>
                    <p className='techName'><img className="techIcon redux" src={reduxImg} /> - REDUX</p>
                    <p className='techName'><i className="fab fa-css3 techIcon" /> - CSS</p>
                    <p className='techName'><i className="fas fa-code techIcon html" /> - HTML</p>
                    <p className='techName'><i className="fab fa-python techIcon py" /> - PYTHON</p>
                  </div>
                </div>
              </div>
              <div className='backContainer'>
                <h2 className='techHeader'>Back-End</h2>
                <div className='techInfoContainer'>
                  <div className='languageContainer'>
                    <p className='techName'><i class="fab fa-node-js techIcon" /> - NODE</p>
                    <p className='techName'><i class="fab fa-node-js techIcon" /> - EXPRESS</p>
                    <p className='techName'><img className="techIcon sqlite" src={sqlite} /> - SQLITE3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* My picture/bio */}
          <div className='Me'>
            <h2 className='stackHeader bioHeader'>Bio</h2>
            <p className='backInFive'>.<br />Back<br /> in 5!</p>
            <div className='meWrapper'>
              <div className='meContainer'>
                <img src={me} className='meImg' alt='Handsome Man' />
              </div>
            </div>
            <div className='bioTextContainer'>
              <div className='bioText'>
                <span className='bioLine'>I am a Web Developer currently enrolled at <a className='lambdaLink' href='https://lambdaschool.com/courses/full-stack-web-development'><img className="lambda" src={lambda} />Lambda School</a>.</span>
                <span className='bioLine'>I love to create something I can be proud of, to meet new people, and to learn new things.</span>
                <span className='bioLine'>For me, this isn't just work... I enjoy the challenge that each project brings.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About