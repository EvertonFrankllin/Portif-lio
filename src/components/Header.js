import React, { useState } from 'react';


import "./Header.css";
//import letraE from "../img/everton.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cv_visivel = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    
    <section id='home' className='header' >
        
      <nav className='list' >
        <ul>
            <a href='https://evertonfrankllin.com/recomendacoes.html' target='blank'><li>Recomendações</li></a>
            <a href='https://blog.evertonfrankllin.com/' target='blank'><li>Blog</li></a>
            <a href='https://evertonfrankllin.com/contato.html' target='blank'><li>Contato</li></a>

        </ul>
      </nav>

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

    /**
     * 
     * <div className='logo'>
            <img src={letraE} alt='Imagem do meu nome'></img>
        </div>
     */
  )
  
}

export default Header
