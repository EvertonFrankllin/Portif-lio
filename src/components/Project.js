import React from 'react';

//Importando imagens
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
    <div>
      <section className='Jobs'>
            <div className="caixa_vazia_Jobs"></div>
            
          <div className='Projetos'>
          <div className="title_Jobs"><h1>Projetos</h1></div>
          
          <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={previsao_tempo} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>PREVISÃO DO TEMPO</h3></a>
                            <p>
                                Universidade Estácio de Sá
                                <div className='tecnology'>
                                        <span>REACT.JS</span> 
                                        <span>GIT</span> 
                                        <span>CONSUMO DE APIs</span>
                                        <span>RESPONSIVIDADE</span>
                                        
                                    </div>
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={PPT} alt="Projeto pedra papel e tesoUra"></img>
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
                        <img src={CRUD} alt="Projeto LISTA CRUD"></img>
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
                        <img src={Calculator} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>CALCULADORA </h3></a>
                            <p>
                                Nesta aplicação eu concieliei aprendizados importantes de front-end para qualquer profissional de técnologia

                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={Lista_itens} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={mario_game} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>


                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={R_digital} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={sorteio} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={tela_login} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>

                <div className="Free_Jobs">
                    <div className="datas_Jobs">
                        <img src={Thumb} alt="Projeto LISTA CRUD"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://crud-ojmn20rbk-evertons-projects-b52b3696.vercel.app/?" target="blank">
                          <h3>LISTA CRUD - ORGANIZAÇÃO </h3></a>
                            <p>
                                Universidade Estácio de Sá
                            </p>
                        </div>
                </div>

          </div>

        </section>
    </div>
  )
}

export default Project
