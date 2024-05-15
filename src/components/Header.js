import React from 'react'

import "./Header.css";
import letraE from "../img/everton.png";

const Header = () => {
  return (
    <div className='header'>
        
      <nav className='list'>
        <ul>
            <a href='https://evertonfrankllin.com/recomendacoes.html' target='blank'><li>Recomendações</li></a>
            <a href='https://blog.evertonfrankllin.com/' target='blank'><li>Blog</li></a>
            <a href='#' target='blank'><li>Contato</li></a>

        </ul>
      </nav>

      <div className='btn-cv'>
      <a href='https://docs.google.com/document/d/1Ub5xfqbGctdT3np-jZ0NHYbR-GJsNeoNIr7mg8AVr98/edit?usp=drive_link' target='blank'><button>Curriculo</button></a>

      </div>
    
    </div>

    /**
     * 
     * <div className='logo'>
            <img src={letraE} alt='Imagem do meu nome'></img>
        </div>
     */
  )
  
}

export default Header
