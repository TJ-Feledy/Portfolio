import React from 'react'

import { Link } from 'react-router-dom'

function NetworkLinks() {
    return (
        <div className='networksContainer'>
          <a className='myGitLink' href='https://github.com/TJ-Feledy'>-GitHub-</a>
          <a className='myLinkedInLink' href='https://www.linkedin.com/in/theodore-feledy/'>-LinkedIn-</a>
          <Link className='myResumeLink' to='/resume' >-Resume-</Link>
        </div>
    )
}

export default NetworkLinks