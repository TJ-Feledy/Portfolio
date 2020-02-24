import React from 'react'
import me from '../images/me.jpg'
import reduxImg from '../images/redux.png'


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
{/* My picture */}
          <div className='meWrapper'>
            <div className='meContainer'>
              <img src={me} className='meImg' alt='Handsome Man' />
            </div>
          </div>
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

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About