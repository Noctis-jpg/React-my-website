import React from 'react'
import { faArrowAltCircleRight, faArrowRight, faArrowsTurnRight, faDesktop, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div data-aos="fade-down">
      <div className='popup'>
      <div className='popup-inner '>
        <section data-aos="fade-up"
     data-aos-duration="2000" className='chapter-popup'>
          <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-12'>
              
              
                <h3 className="text-uppercase custom-title mb-0">personal infos</h3>
                
                <div className='col-12 d-block d-none'>
                <img src="../images/dali-mobil.jpg" className="img-fluid main-img-mobile" alt="about avatar"/>
                </div>
                <div className='col-12'>
                <ul className="about-list list-unstyled open-sans-font"><li><span className="title">first name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Yunus</span></li><li><span className="title">last name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">MADEN</span></li><li><span className="title">Age: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">26 Years</span></li><li><span className="title">Nationality: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Turkey</span></li><li><span className="title">Freelance: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span></li><li><span className="title">Address: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Istanbul</span></li><li><span className="title">phone: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+905317952039</span></li><li><span className="title">Email: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">yunusmaden25@gmail</span></li><li><span className="title">Skype: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> yunus.maden</span></li><li><span className="title">langages: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Turkish, English</span></li></ul>                </div>
                <div className='col-12'>
                      <Link to='' target="_blank" className='button getPDF' id='getPDF'>
                      
                        <span target="_blank" className='button-text'>
                          Download CV
                        </span>
                        
                        <span><FontAwesomeIcon icon={faDownload} className='icon-more' size="1x"></FontAwesomeIcon></span>
                        
                      </Link>
                </div>
              </div>
            </div>



          </div>
  
              <div className='container ym-section'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <div className='main-box'>
                      <div className='head-img'><FontAwesomeIcon icon={faDesktop} className='icon-popup' color="#fff" size="3x"></FontAwesomeIcon></div>
                      <div className='text'><h3>WEB DESIGN</h3>
                    </div>
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <div className='main-box'>
                      <div className='head-img'><FontAwesomeIcon icon={faDesktop} className='icon-popup' color="#fff" size="3x"></FontAwesomeIcon></div>
                      <div className='text'><h3>WEB DEVELOPMENT</h3>
                    </div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='main-box'>
                      <div className='head-img'><FontAwesomeIcon icon={faDesktop} className='icon-popup' color="#fff" size="3x"></FontAwesomeIcon></div>
                      <div className='text'><h3>RESPONSIVE WEB DESIGN</h3>
                    </div>
                    </div>
                  </div>
                   
                  <div className='col-lg-3'>
                    <div className='main-box'>
                      <div className='head-img'><FontAwesomeIcon icon={faDesktop} className='icon-popup' color="#fff" size="3x"></FontAwesomeIcon></div>
                      <div className='text'><h3>PHOTOGRAPHY</h3>
                    </div>
                    </div>
                  </div>

                </div>
              </div>
              </section>
              </div> 
              </div> 

    </div>
  )
}

export default About