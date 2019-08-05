import React from 'react'

class About extends React.Component {


  render() {
    return (
      <div className='About'>
        <h1 className='aboutHeader'>ABOUT</h1>
        <i class="fas fa-wave-square"></i>
        <div className='aboutCards'>
          <div className='aboutCard'>
            <i class="fas fa-globe"></i>
            <h2 className='aboutH2'>Intuitive</h2>
            <p className='aboutP'>Being user friendly and ease of navigation are top priorities.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About