import React, { useState } from 'react';
import Lista from '../Menu/ListHorizon';

import "./Header.css";
//import letraE from "../img/everton.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cv_visivel = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    
    <section id='home' className='header' >
        
      <Lista rec="Recomendações" blog="Blog" contato='Contato' />

      <div className='btn-cv'onClick={cv_visivel}>
        {isVisible ? "":''}
        <div><button>Resume</button></div>

        {isVisible && (
          <div  className='ajuste_btn'>

            <div  className='btn-cv1'><a href='https://docs.google.com/document/d/1Ub5xfqbGctdT3np-jZ0NHYbR-GJsNeoNIr7mg8AVr98/edit?usp=drive_link' target='blank'><button>Português</button></a></div>
            <div className='btn-cv2'><a href='https://docs.google.com/document/d/1jFZPDQIL7m6iKZBnv-7UvBg5fhAJZvBU6YWQtj1FB-I/edit?usp=drive_link' target='blank'><button>Inglês</button></a></div>
        
          </div>
        )}

      </div>
    
    </section>

  )
  
}

export default Header
