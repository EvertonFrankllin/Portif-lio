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
          Por volta de 2014, comecei a explorar o mundo da tecnologia quando ganhei meu primeiro "Notebook". Naquela época, eu não tinha internet em casa, então a única coisa que dava para fazer era mexer nas pastas do sistema, como a famosa "SYSTEM-32", ou nos aplicativos já pré-instalados no "Notebook". Com isso, consegui absorver muita informação sobre o que era programação, como funcionava e para que servia.
          <br/><br/>
          Em 2015, no finalzinho do ano, consegui uma bolsa pelo <span>PRONATEC</span> para estudar redes de computadores no <span>Senai BA</span> pelo <span>sistema FIEB</span>. Lá, aprendi muita coisa sobre redes, IP, DNS, AD, cabeamento estruturado, VPN, servidores e muito mais. Tive a oportunidade de conhecer outros sistemas operacionais, como o <span>LINUX</span>, e também configurar alguns servidores baseados nessa arquitetura, como <span>VOIP</span> e outros.
          <br/><br/>
          Desde então, estou completamente inserido no mundo da tecnologia, sempre aprendendo algo novo. Tenho muita vivência com redes e telecomunicações, mas minha grande paixão é a área de desenvolvimento. Atualmente, estou em fase de migração de carreira, atuando no setor de <span>desenvolvimento Front-End</span> como freelancer, contribuindo em algumas aplicações Open Source e, é claro, sempre construindo algo pessoal, como este e outros sites listados em meu portfólio.
          <br/><br/>
          No meu tempo livre, adoro <span>programar</span>, estou sempre escrevendo algo. Gosto muito de estudar música - como dizem por aí - "Todo programador é um músico frustrado". Mas, brincadeiras à parte, gosto de conversar sobre a vida, sobre as estrelas e ler um pouco. Fora do computador, priorizo momentos de qualidade com minha família, amigos e meus animais de estimação, além de conhecer novos lugares e novas pessoas.
       </p>

        </div>
        
      </section>

    </aside>
    </div>
  )
}

export default leave