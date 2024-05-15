import React from 'react'

//Importando Imagens
import logo from '../img/Perfil.png';
import IG from '../img/WhiteInsta.svg';
import LINKEDIN from '../img/WhiteLinkedin.svg';
import GH from '../img/WhiteGithub.svg';
import EMAIL from '../img/WhiteEmail (1).svg';
import VERIFICADO from'../img/verificar.png';
import HOME from '../img/WhiteHome.svg';
import PROJECT from'../img/WhiteProject.svg';
import WORK from'../img/WhiteWork.svg';

import "./Aside.css";

const Aside = () => {
  return (
    <aside className='context'>

      <div className='foto'><img src={logo} alt='Minha foto'></img></div>

       <div className='meu_nome'> <h1>Everton Frankllin</h1> <img src={VERIFICADO} alt='Meu nome verificado'></img></div>
        <h4>Software Engineer Front-End</h4>

        <div className='line'></div>
        <div className='social'>

          <div className='linkedin'> <a href='www.linkedin.com/in/everton-frankllin' target='blank'><img src={LINKEDIN} alt='Imagem do Linkedin'></img></a> </div>
          <div className='ig'> <a href='https://www.instagram.com/dev_frankk/' target='blank'><img src={IG} alt='imagem do instagram'></img></a>  </div>
          <div className='git'><a href='https://github.com/EvertonFrankllin' target='blank'> <img src={GH} alt='Imagem do GitHub'></img></a>  </div>
          <div className='EMAIL'><a href='https://github.com/EvertonFrankllin' target='blank'> <img src={EMAIL} alt='Imagem do EMIAL' title='evertonfrankllin@gmail.com'></img></a>  </div>

          
        </div>

        <div className='line'></div>

      <div className='menu'>
      <nav className='MN'>
        <ul>
            <li><img src={HOME} alt='IMAGEM DE HOME'></img> - HOME</li>
            <li><img src={WORK} alt='IMAGEM DE JOJETOS'></img> - Esperiências</li>
            <li><img src={PROJECT} alt='IMAGEM DE WORKS'></img> - Projetos</li>
        </ul>
      </nav>

      <div className='line'></div>
      </div>

    </aside>
  )
}

export default Aside