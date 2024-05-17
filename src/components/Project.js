import React from 'react';

//Importando imagens
import PPT from '../img/PPT.jpg';
import Pokemon from '../img/pokemon.jpg';
import CRUD  from '../img/CRUD.jpg';

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
                        <img src={PPT} alt="Projeto pedra papel e tesoUra"></img>
                    </div>

                        <div className="experience_Jobs">
                        <a href="https://pedra-papel-e-tesoura-seven.vercel.app/" target="blank">
                          <h3>PEDRA PAPEL E TESOURA - GAME </h3></a>
                            <p>
                                Universidade Estácio de Sá
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
                                Universidade Estácio de Sá
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
