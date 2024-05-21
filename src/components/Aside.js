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
//funções na page

const Home = document.querySelectorAll('#carreira_scrool');
const center = document.querySelectorAll('#carreira_scrool');
const back = document.querySelectorAll('#carreira_scrool');
scroll_page();
function scroll_page(){
  Home.forEach((item, index)=>{
      document.querySelectorAll('#home_scrool')[index]
      .addEventListener('click', ()=>{
            window.scroll({
              top:0,
              behavior:'smooth',
          });
      });
  });

  center.forEach((item, index)=>{
    document.querySelectorAll('#carreira_scrool')[index]
    .addEventListener('click', ()=>{
          window.scroll({
            top:850,
            behavior:'smooth',
        });
    });
});

back.forEach((item, index)=>{
  document.querySelectorAll('#jobs_scrool')[index]
  .addEventListener('click', ()=>{
        window.scroll({
          top:2500,
          behavior:'smooth',
      });
  });
});
}


//troca cor

const Aside = () => {
  return (
    <div className='container'>

    <aside className='context'>

      <div className='foto'><img src={logo} alt='Minha foto'></img></div>

       <div className='meu_nome'> <h1>Everton Frankllin</h1> <img src={VERIFICADO} alt='Meu nome verificado'></img></div>
        <h4>Software Engineer Front-End</h4>

        <div className='line'></div>
        <div className='social'>

          <div className='linkedin'> <a href='https://www.linkedin.com/in/everton-frankllin' target='blank'  aria-label="/everton-frankllin" > <img src={LINKEDIN} alt='Imagem do Linkedin'></img></a> </div>
          <div className='ig'> <a href='https://www.instagram.com/dev_frankk/' target='blank'aria-label="@dev_frankk" ><img src={IG} alt='imagem do instagram'></img></a>  </div>
          <div className='git'><a href='https://github.com/EvertonFrankllin' target='blank' aria-label="/EvertonFrankllin"  > <img src={GH} alt='Imagem do GitHub'></img></a>  </div>
          <div className='EMAIL'><a href='https://github.com/EvertonFrankllin' target='blank' aria-label="evertonfrankllintrc@gmail.com"  > <img src={EMAIL} alt='Imagem do EMIAL'></img></a>  </div>

          
        </div>

        <div className='line'></div>

      <div className='menu'>
      <nav className='MN'>
        <ul>
            <li id='home_scrool' className='back'><img src={HOME} alt='IMAGEM DE HOME'></img> - Home</li>
            <li id='carreira_scrool' className='back'><img src={WORK} alt='IMAGEM DE JOJETOS'></img> - Experiências</li>
            <li id='jobs_scrool' className='back'><img src={PROJECT} alt='IMAGEM DE WORKS'></img> - Projetos</li>
        </ul>
      </nav>

      <div className='line'></div>
      </div>

    </aside>

    
    </div>//container

    //Outras sessões ficaram a baixo
  
  )
  
}
/*function home(){
  document.getElementById('home').innerHTML =
}
*/

export default Aside