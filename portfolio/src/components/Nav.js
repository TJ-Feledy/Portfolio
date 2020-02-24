import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav'>
      <Link to='/about' className='navLink'>about</Link>
      <Link to='/values' className='navLink'>values</Link>
      <Link to='/' className='navLink'>projects</Link>
    </div>
  )
}

export default Nav