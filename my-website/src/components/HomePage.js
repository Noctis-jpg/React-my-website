import { faArrowAltCircleRight, faArrowRight, faArrowsTurnRight, faDesktop, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from './Popup'
import $ from 'jquery'; 
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);


  $( document ).ready(function() {
    $(".button").click(function(){
      $(".popup-layer").css("display","block")
    });
    $(".close-btn").click(function(){
      $(".popup-layer").css("display","none")
    });
});



  return (
    <div  className='container-fluid'>
      <div className='popup-layer'></div>
      <div className='color-block d-lg-block'></div>
      <div className='row home-details-container'>
        <div  className='col-12 col-lg-4 position-fixed home-avatar'></div>
        <div className='col-12 col-lg-8 offset-lg-4 text-center text-lg-start home-det'>
          <div  className='col-12 home-card'>
          <img src="" className='d-none' />
          <h1 className='text-uppercase'>I'M YUNUS MADEN
            <span>WEB DEVELOPER</span>
          </h1>
          <p>I'm a Turkish based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
            <button onClick={() => setButtonPopup(true)} className='button'>
              <span  className='button-text'>MORE ABOUT ME</span>
              <span><FontAwesomeIcon icon={faArrowAltCircleRight} className='icon-more' size="2x"></FontAwesomeIcon></span>
            </button>

          </div>
        </div>
      </div>
      
      <Popup trigger={buttonPopup}  setTrigger={setButtonPopup}>
        <div data-aos="fade-up" data-aos-duration="1200" className="aos-init aos-animate">
        <div data-aos="fade-down" className='title-chap text-sm-center'>

        <h1>ABOUT <span>ME</span></h1>
        <span className="title-bg">Resume</span>
        </div>
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
              
            </Popup>
    </div>
    
    )
}

export default HomePage
