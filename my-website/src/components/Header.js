import { faBriefcase, faEnvelope, faHouseChimney, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <NavLink to="/"  className="site-map" activeclassname="active" ><FontAwesomeIcon icon={faHouseChimney} color="white"size="1x"></FontAwesomeIcon><h2>HOME</h2></NavLink>
      <NavLink to="/about"  className=" site-map" activeclassname="active"><FontAwesomeIcon icon={faUser} color="white" size="1x"></FontAwesomeIcon><h2>ABOUT</h2></NavLink>
      <NavLink to="/portfolio" className=" site-map" activeclassname="active"><FontAwesomeIcon icon={faBriefcase} color="white" size="1x"></FontAwesomeIcon><h2>PORTFOLIO</h2></NavLink>
      <NavLink to="/contact"  className="site-map" activeclassname="active"><FontAwesomeIcon icon={faEnvelope} color="white" size="1x"></FontAwesomeIcon><h2>CONTACT</h2></NavLink>
      
      </header>

  )
}

export default Header