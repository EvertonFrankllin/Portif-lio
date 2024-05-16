import React from 'react'

import letraE from "../img/E.svg";
import './Leave.css';

const leave = () => {
  return (
    <div className='container-leave'>
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
    </div>
  )
}

export default leave