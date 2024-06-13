import React from 'react'
//import PropTypes from 'propTypes';

const ListHorizon = ({rec, blog, contato}) => {
  return (
    <>
      <nav className='list' >
        <ul>
            <a href='https://evertonfrankllin.com/recomendacoes.html' target='blank'><li>{rec}</li></a>
            <a href='https://blog.evertonfrankllin.com/' target='blank'><li>{blog}</li></a>
            <a href='https://evertonfrankllin.com/contato.html' target='blank'><li>{contato}</li></a>

        </ul>
      </nav> 
    </>
  )
}

export default ListHorizon
