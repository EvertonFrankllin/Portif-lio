import React from 'react';
import Copy from '../Copy/Copy';

// Importando Imagens
import logo from '../../img/Perfil.png';
import IG from '../../img/WhiteInsta.svg';
import LINKEDIN from '../../img/WhiteLinkedin.svg';
import GH from '../../img/WhiteGithub.svg';
import EMAIL from '../../img/WhiteEmail (1).svg';
import VERIFICADO from '../../img/verificar.png';
import HOME from '../../img/WhiteHome.svg';
import PROJECT from '../../img/WhiteProject.svg';
import WORK from '../../img/WhiteWork.svg';


import "./Home.css";

function handleClick(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(id);
  const targetOffset = targetElement.offsetTop;

  window.scrollTo({
    top: targetOffset - 10, // 10 do top até a section
    behavior: 'smooth'
  });
}

//border dos botões
/**
    border_botton();
    function border_botton (){
    document.querySelectorAll('#h').forEach((item)=>{
    item.addEventListener('click', ()=>{
    item.style.borderBottom = '1px solid #000';
    });
  });
}

 */

const Aside = () => {
  return (
    <div className='container'>

      <aside className='context'>

        <div className='foto'><img src={logo} alt='Minha foto'></img></div>

        <div className='meu_nome'>
          <h1>Everton Frankllin</h1>
          <img src={VERIFICADO} alt='Meu nome verificado'></img>
        </div>
        <h4>Software Engineer Front-End</h4>

        <div className='line'></div>
        <div className='social'>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/everton-frankllin' target='blank' aria-label="/everton-frankllin">
              <img src={LINKEDIN} alt='Imagem do Linkedin'></img>
            </a>
          </div>
          <div className='ig'>
            <a href='https://www.instagram.com/dev_frankk/' target='blank' aria-label="@dev_frankk">
              <img src={IG} alt='imagem do instagram'></img>
            </a>
          </div>
          <div className='git'>
            <a href='https://github.com/EvertonFrankllin' target='blank' aria-label="/EvertonFrankllin">
              <img src={GH} alt='Imagem do GitHub'></img>
            </a>
          </div>
          <div className='EMAIL'>
            <a href='evertonfrankllintrc@gmail.com' target='blank' aria-label="evertonfrankllintrc@gmail.com">
              <img src={EMAIL} alt='Imagem do EMAIL'></img>
            </a>
          </div>
        </div>

        <div className='line'></div>

        <div className='menu'>
          
          <nav className='MN'>
            <ul>
              <a href='#home' onClick={handleClick}><li  className='back'><img src={HOME} alt='IMAGEM DE HOME'></img> - Home</li></a>
              <a href='#carreira' onClick={handleClick}><li  className='back'><img src={WORK} alt='IMAGEM DE JOJETOS'></img> - Experiências</li></a>
              <a href='#jobs' onClick={handleClick}><li  className='back'><img src={PROJECT} alt='IMAGEM DE WORKS'></img> - Projetos</li></a>
            </ul>
          </nav>

          <div className='line'></div>

            <Copy style={{ paddingTop: 20 }} />

        </div>

      </aside>
      
    </div> //container

    //Outras sessões Futuras
  );
}

export default Aside;
