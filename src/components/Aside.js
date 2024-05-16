import React from 'react'

//Importando Imagens
import letraE from "../img/E.svg";
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
    <div className='container'>

    <aside className='context'>

      <div className='foto'><img src={logo} alt='Minha foto'></img></div>

       <div className='meu_nome'> <h1>Everton Frankllin</h1> <img src={VERIFICADO} alt='Meu nome verificado'></img></div>
        <h4>Software Engineer Front-End</h4>

        <div className='line'></div>
        <div className='social'>

          <div className='linkedin'> <a href='https://www.linkedin.com/in/everton-frankllin' target='blank'><img src={LINKEDIN} alt='Imagem do Linkedin'></img></a> </div>
          <div className='ig'> <a href='https://www.instagram.com/dev_frankk/' target='blank'><img src={IG} alt='imagem do instagram'></img></a>  </div>
          <div className='git'><a href='https://github.com/EvertonFrankllin' target='blank'> <img src={GH} alt='Imagem do GitHub'></img></a>  </div>
          <div className='EMAIL'><a href='https://github.com/EvertonFrankllin' target='blank'> <img src={EMAIL} alt='Imagem do EMIAL' title='evertonfrankllin@gmail.com'></img></a>  </div>

          
        </div>

        <div className='line'></div>

      <div className='menu'>
      <nav className='MN'>
        <ul>
            <li className='back'><img src={HOME} alt='IMAGEM DE HOME'></img> - Home</li>
            <li className='back'><img src={WORK} alt='IMAGEM DE JOJETOS'></img> - Experiências</li>
            <li className='back'><img src={PROJECT} alt='IMAGEM DE WORKS'></img> - Projetos</li>
        </ul>
      </nav>

      <div className='line'></div>
      </div>

    </aside>

    <aside className='front'>
      <div className='logo'> <img src={letraE} alt='Minha logo com meu nome'></img></div>
      <section className='HOME'>
        <div className='text'>
          <p>
            Por volta de 2014, comecei a explorar o mundo da técnologia quando ganhei meu primeiro "Notebook", nessa época eu não tinha internet em casa então a unica coisa que dava pra fazer
            era mexer nas pastas do sistema a famosa "SISTEN-32" ou aplicativos já pré instalados no "Notebook". Dai eu consegui abstrair muuita informação a cerca do que era programação, como funcionava e para que servia, como usar, pra que usar e coisas
            Em 2015, bem no finalzinho, eu consegui uma bolsa pelo <span>PRONATEC</span>, na época, para estudar redes de computadores no <span>Senai BA</span> pelo <span>sistema FIEB</span>, lá aprendi muita coisa sobre redes, IP, DNS, A.D,
            Cabeamento estruturado, VPN, Servidores e muito mais, tive a oportunidade de conhecer outros sistemas operacionais da <span>LINUX</span> e também configurar alguns servidores baseados nessa arquitetura, como <span>VOIP</span> e outros. 
            <br/><br/>
            Desde então estou insrido completamente no mundo da técnologia, sempre apredendo algo novo. Tenho muita vivencia com redes e telecomunicações,
            mas minha grande paixão é a área de desenvolvimento. 
            Atualmente estou em faze de migração de carreira atuando no setor de <span>desenvolvimento Front-End </span> como freelancer, contribuíndo em algumas aplicações Open Sorce e é claro, sempre construindo algo pessoa, como este e outros sites listados em meu portifólio.
            <br/><br/>
            No meu tempo livre eu adoro <span>programar</span>, estou sempre escrevendo algo, gosto muito de estudar musica - como dizem por aí - "Todo programador é um músico frustrado" , mas brincadeiras a parte, gosto de conversar sobre a vida, sobre as estrelas e ler um pouco.
            Fora do computador, priorizo momentos de qualidade com minha família, amigos e com meus animais de estimação, como também conhecer novos lugares e novas pessoas.

          </p>
        </div>
        
      </section>

    </aside>
    </div>//container

    //Outras sessões ficaram a baixo
  
  )
  
}

export default Aside