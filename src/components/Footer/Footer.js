import React from 'react'
import Copy from '../Copy/Copy';

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className='footer'>
            <div className="caixa_vazia_footer"></div>
            
          <div className='footer_footer'>
          
          
          <div className="Free_footer">
                        <div className="experience_footer">
                                    <div className='paragrafos'>
                                        <p>
                                        Este projeto de portfólio foi concebido com base em ideias próprias e inspirações externas, e o código foi desenvolvido no Visual Studio Code (VS Code). As tecnologias utilizadas foram React.js e CSS puro.
                                              <p>Feito com Amor ❤️ - by Everton Frankllin </p>
                                              <Copy />
                                        </p>  
                                      </div>
                            
                        </div>
                </div>


          </div>

        </section>
    </div>
  )
}

export default Footer