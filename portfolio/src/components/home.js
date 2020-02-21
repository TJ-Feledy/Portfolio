import React from 'react'

class Home extends React.Component {

  aboutClick = evt => {
    evt.preventDefault()
    document.getElementById('About').scrollIntoView(true)
  }

  render() {
    return (
      <div className='home'>
        <p className='hello'>Hello, my name is <span className='name'>Theodore Feledy.</span></p>
        <h3 className='homeLink' onClick={this.aboutClick} >Let's get started! <i className="fas fa-caret-right"></i></h3>
        <p className='hello'>I'm a Full Stack Web Developer.</p>
      </div>
    )
  }
}

export default Home