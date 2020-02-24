import React from 'react'


class Values extends React.Component {

  render() {
    return (
      <>
        <div className='About' id='About'>
          <div className='star1 star' />
          <div className='star2 star' />
          <div className='star3 star' />
          <div className='aboutContainer'>
            <h1 className='aboutHeader'>VALUES</h1>
            <div className='iconContainer'>
              <i className="fas fa-wave-square fa-lg"></i>
            </div>
            <div className='aboutCards'>
              <div className='aboutCard'>
                <div className='iconWrapper'><i className="fas fa-globe fa-4x"></i></div>
                <h2 className='aboutH2'>Intuitive</h2>
                <p className='aboutP'>User friendly design and ease of navigation are top priorities.</p>
                <div className='flameTip' />
              </div>
              <div className='aboutCard'>
                <div className='iconWrapper'><i className="fas fa-heartbeat fa-4x"></i></div>
                <h2 className='aboutH2'>Dynamic</h2>
                <p className='aboutP'>I love breathing life into a webpage.</p>
                <div className='flameTip' />
              </div>
              <div className='aboutCard'>
                <div className='iconWrapper'><i className="fas fa-expand-arrows-alt fa-4x"></i></div>
                <h2 className='aboutH2'>Responsive</h2>
                <p className='aboutP'>Order at all levels. Creating a responsive design is what I do.</p>
                <div className='flameTip' />
              </div>
              <div className='aboutCard'>
                <div className='iconWrapper'><i className="fas fa-cog fa-4x fa-spin"></i></div>
                <h2 className='aboutH2'>Functional</h2>
                <p className='aboutP'>If you can dream it, I can make it work.</p>
                <div className='flameTip' />
              </div>
            </div>
          </div>
          <div className='aboutBackground'/>
        </div>
      </>
    )
  }
}

export default Values