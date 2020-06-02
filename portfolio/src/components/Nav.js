import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Nav(props) {
  const [point, setPoint] = React.useState(false)

  
  React.useEffect(() => {
    if(props.location.pathname === '/values') {
      setTimeout(() => {
        setPoint(true)
      }, 15000)
    }
    else {
      setPoint(false)
    }
  },[props.location.pathname])


  console.log(props)
  return (
    <div className='Nav'>
      <Link to='/about' className='navLink'>about</Link>
      <Link to='/values' className='navLink'>values</Link>
      <div className='projectLinkContainer'>
        <Link to='/projects' className='navLink'>projects</Link>
        {props.location.pathname === '/values' && point === true ? 
          <div className='pointContainer'><i className="pointUp fas fa-hand-point-up"></i></div> :
          null
        }
      </div>
    </div>
  )
}

export default withRouter(Nav)