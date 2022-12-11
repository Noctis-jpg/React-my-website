import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div data-aos="fade-right" className='popup'>
        <div className='popup-inner about'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faCircleXmark}  size="2x" color='white'></FontAwesomeIcon></button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup