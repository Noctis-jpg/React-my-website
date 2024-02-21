import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import React from 'react'

const Social = () => {
  return (
    <div className='d-flex ym_Social'>
        <div className='Title_ym'><h3>Other Platforms</h3></div>
        <div className='smIcons'>
           <a href='https://github.com/Noctis-jpg' target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-more' size="2x"></FontAwesomeIcon></a> 
           <a href='https://www.linkedin.com/in/yunus-maden-71a799193/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon-more' size="2x"></FontAwesomeIcon></a> 
</div>


    </div>
  )
}

export default Social