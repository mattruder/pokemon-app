import { React, Component } from 'react'
import './Pokemon.css'

function Pokemon({ currentPokemon }) {

  const moves = currentPokemon.moves.map((move) => {
    return `${move.move.name.toUpperCase()} | `
  })

  return (
    <div className="pokemon-container">
      <div className="pokemon-left">
        <img className="pokemon-img" src={currentPokemon.sprites.front_default}/>
        <h1>{currentPokemon.name.toUpperCase()} #{currentPokemon.id}</h1>
      </div>
      <div className="pokemon-right">
        <h2>TYPE:</h2>
        <p>{currentPokemon.types[0].type.name.toUpperCase()}</p>
        <h2>MOVES:</h2>
        <div className='scroll'>
        <p>{moves}</p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
