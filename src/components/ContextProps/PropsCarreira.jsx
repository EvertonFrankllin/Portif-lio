import React from 'react'

const PropsCarreira = (titleH1, datas, textH3, textP) => {
  return (
    <section id='carreira' className='Works'>
    
            <div className="title"><h1>{titleH1}</h1></div>
          
                <div className="Freelancer">
                    <div className="datas"><h3>{datas}</h3></div>
                        <div className="experience">
                        <h3>{textH3}</h3>
                            <p>
                                {textP}
                            </p>
                        </div>
            </div>
    </section>
   
  )
}

export default PropsCarreira