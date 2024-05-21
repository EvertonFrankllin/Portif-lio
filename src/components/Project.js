import React from 'react';

//Importando imagens
import Conversor from '../img/conversor_exa.jpg';
import Conversor_unidade from '../img/conversor_unidade.jpg';
import PPT from '../img/PPT.jpg';
import Pokemon from '../img/pokemon.jpg';
import CRUD  from '../img/CRUD.jpg';
import Calculator from'../img/calculator.jpg';
import Lista_itens from'../img/lista_itens.jpg';
import mario_game from'../img/mario_game.jpg';
import previsao_tempo from'../img/previsao_tempo.jpg';
import R_digital from'../img/R_digital.jpg';
import sorteio from '../img/sorteio.jpg';
import tela_login from'../img/tela_login.jpg';
import Thumb from'../img/thumb.jpg';

import './Project.css';

const Project = () => {
  return (
      <section id='jobs' className='Jobs'>
            <div className="caixa_vazia_Jobs"></div>
            
          <div className='Projetos'>
          <div className="title_Jobs"><h1>Projetos</h1></div>
          
          <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href='https://hex-para-rgb.evertonfrankllin.com/' target='blank'>
                            <img src={Conversor} alt="Projeto conversor de cores"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://hex-para-rgb.evertonfrankllin.com/" target="blank">
                          <h3>CONVERSOR DE CORES HEXADECIMAIS PARA RGB</h3></a>
                            <p>
                                Ferramenta Criada por mim para facilitar a minha vida e a de outros desenvolvedores no que diz respeito a agilidade
                                na criação de projetos front-end. Esta ferramenta foi desenvolvida utilizando o maximo de minhas habilidades 
                                em HTML, CSS e JAVASCRIPT. Eu convido você a utilizar, de forma gratuita, no link a baixo:<a href='https://hex-para-rgb.evertonfrankllin.com/'target='blank'>https://hex-para-rgb.evertonfrankllin.com/.</a>
                                
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href='https://conversordeunidades.evertonfrankllin.com/' target='blank'>
                            <img src={Conversor_unidade} alt="Projeto conversor de cores"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://conversordeunidades.evertonfrankllin.com/" target="blank">
                          <h3>CONVERSOR DE UNIDADES</h3></a>
                            <p>
                                Ferramenta Criada pensando na escalabilidade do projeto, afim de subir em produção uma versão mobile.
                                Eu convido você a utilizar, de forma gratuita, no link a baixo:<a href='https://conversordeunidades.evertonfrankllin.com//'target='blank'>https://conversordeunidades.evertonfrankllin.com/.</a>
                                
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                </div>
                            </p>
                        </div>
                </div>

          <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                            <img src={previsao_tempo} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>PREVISÃO DO TEMPO</h3></a>
                            <p>
                                Ao desenvolver este web App eu pude colocar em prática habilidades como, consumo de APIs,
                            versionamento de código com git no terminal, utilização de freamworks como, React, utilização da
                            ferramenta Vite para construção, criação e utilização de componentes e diversas outras habilidades que com certeza serão fundamentais na
                            minha carreira. Com esse Projeto eu superei minhas expectativas quanto a utilização de lógica de 
                            programação e javascript, foi muito enriquecedor.
                            
                                <div className='tecnology'>
                                        <span>REACT.JS</span> 
                                        <span>Vite</span>
                                        <span>CONSUMO DE APIs</span>
                                        <span>GIT</span> 
                                        <span>RESPONSIVIDADE</span>
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://pedra-papel-e-tesoura-seven.vercel.app/" target="blank">
                            <img src={PPT} alt="Projeto pedra papel e tesoUra"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://pedra-papel-e-tesoura-seven.vercel.app/" target="blank">
                          <h3>PEDRA PAPEL E TESOURA - GAME </h3></a>
                            <p>
                                Uma ferramenta de entretenimento desenvolvida para aprimorar minhas habilidades
                                de programação front-end. Com a criação dela eu tive a oprtunidade de colocar em prática
                                conhecimentos e habilidades cruciais de Lógica de programação e javascript, como manipulação
                                de DOM, embaralhamento e escolha ao acaso. 

                                    <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                    </div>
                            </p>

                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://pokedex-j9ov.vercel.app/" target="blank">
                            <img src={Pokemon} alt="Projeto POKEDEX"></img>
                        </a>
                        
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://pokedex-j9ov.vercel.app/" target="blank">
                          <h3>POKEDEX COM JS PURO - ENTRETENIMENTO </h3></a>
                            <p>
                                Neste aplicativo web eu pude aplicar  e aprimorar conhecimentos em consumo de APIs com validação em Fetch,
                                manipulação de DOM, captação de evento com listen e lógica de programação. Do ponto de vista técnio foi Uma
                                das aplicações mais desafiadoras, pois seu tive de fazer muitas validações que eu nunca tinha feito antes.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>FETCH</span>
                                        <span>GIT</span>
                                    </div>

                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                            <img src={CRUD} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Ao desenvolver essa aplicação CRUD, Eu pude obter uma visão holística do desenvolvimento de 
                                software, abrangendo tanto aspectos técnicos quanto habilidades práticas que são 
                                fundamentais para qualquer desenvolvedor, consegui aprender conceitos de banco de dados como, modelagem de dados.
                                Pude desenvolvedor habilidades de back-end,consumo de APIs, como a criação de APIs Restfull para comunicação
                                entre back e front, segurança, deploy e Devops, versionamento de código, git, teste unitário e de integração e 
                                debug. Em resumo foi uma aplicação que me fez evoluir bastante como desenvolvedor.

                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>FETCH</span>
                                        <span>APIs</span>
                                        <span>GIT</span>
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://calculadora-phi-azure.vercel.app/" target="blank">
                            <img src={Calculator} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://calculadora-phi-azure.vercel.app/" target="blank">
                          <h3>CALCULADORA </h3></a>
                            <p>
                                Nesta aplicação eu conciliei aprendizados importantes de front-end para qualquer profissional de técnologia.
                                Aprendi sobre manipulação de vetores (Arrays), condicionais, Loops, manipulação de DOM e pratiquei bastante 
                                habilidade de web design com FlexBox.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                    </div>

                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://lista-de-produtos-iota.vercel.app/" target="blank">
                            <img src={Lista_itens} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://lista-de-produtos-iota.vercel.app/" target="blank">
                          <h3>LISTA DE ÍTENS </h3></a>
                            <p>
                                Esta aplicação me proporcionou superar diversas barreiras de aprendizado, com ela eu pude solidificar
                                alguns conhecimentos adquiridos ao longo da minha formação, pude fixar melhor os conceitos de pecepsão analitica
                                e escalabilidade de negócio, foi um projeto que fiz com muito intuziasmo e 
                                pretendo realizar a criação de um aplicativo nativo com essa mesma ideia, pois creio que facilitaria de mais a vida
                                dos utilizadores.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://mario-ochre.vercel.app/" target="blank">
                            <img src={mario_game} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://mario-ochre.vercel.app/" target="blank">
                          <h3>SUPER MARIO BROS - GAME </h3></a>
                            <p>
                                Foi com esse projeto que senti a necessidade de aprender mais sobre manipulação de DOM, foi aqui que senti que 
                                eu precisava estudar muito mais para chegar onde quero chegar, além de ser o meu primeiro jogo feito com JS, está 
                                aplicação também me mostrou que, por mais que pareça difícil, com dedicação e resiliência, poderemos alcançar 
                                qualquer coisa.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                        <span>Desenvolvimento de Jogos</span>
                                    </div>
                            </p>
                        </div>
                </div>


                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://relogio-digital-five-lyart.vercel.app/" target="blank">
                            <img src={R_digital} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://relogio-digital-five-lyart.vercel.app/" target="blank">
                          <h3>RELÓGIO DIGITAL </h3></a>
                            <p>
                                Com este projeto eu pude explorar funções nativas de JS e aprimorar esse conhecimento de forma prática
                                e didática, conhecimento esse que acredito ser muito valioso no mercado atual.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                        <span>Desenvolvimento de Jogos</span>
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://numero-da-sorte.vercel.app/" target="blank">
                            <img src={sorteio} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://numero-da-sorte.vercel.app/" target="blank">
                          <h3>NUMERO DA SORTE </h3></a>
                            <p>
                                Com essa alicação eu aprendi bastante sobre math.randon map, math.floor, dominio e manipulação de dom, 
                                eventos ao acaso, condicionais e muitos outras habilidades já citadas em outros projetos. Esta aplicação 
                                me levou do 0 ao 100 em poucas linhas de código e abriu minha cabeça para novas possibilidades.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>GIT</span>
                                        <span>LÓGICA</span>
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://tela-de-login-com-react.vercel.app/" target="blank">
                             <img src={tela_login} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://tela-de-login-com-react.vercel.app/" target="blank">
                          <h3>TELA DE LOGIN - REACT </h3></a>
                            <p>
                               Uma tela de login simples, mas completamente construída em React, projeto feito apenas para fixação de conteúdo
                               <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>REACT</span>
                                        
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <a href="https://monetizacao-thumb.vercel.app/" target="blank">
                            <img src={Thumb} alt="Projeto LISTA CRUD"></img>
                        </a>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://monetizacao-thumb.vercel.app/" target="blank">
                          <h3>CAPITURA DE THUMBNAIL </h3></a>
                            <p>
                                Este projeto foi desenvolvido com intúito de monetização, pois é uma ferramenta de grande uso e que 
                                seria bastante útil para aqueles que querem pegar uma imagem legal de um vídeo de YOUTUBE.
                                Usei minhas habilidades em banco de dados e desenvolvi habilidades em PHP.
                                <div className='tecnology'>
                                        <span>HTML 5</span> 
                                        <span>CSS</span> 
                                        <span>JAVASCRIPT</span>
                                        <span>PHP</span>
                                        
                                    </div>
                            </p>
                        </div>
                </div>
                <div className='line'></div>

          </div>

        </section>
  )
}

export default Project
