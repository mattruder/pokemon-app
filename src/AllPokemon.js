import { React, Component } from 'react'
import './AllPokemon.css'

function AllPokemon({ allPokemon, displaySelectedPokemon }) {
  const allThePokemon = allPokemon.map((pokemon) => {
    return (
      <div className='individual-pokemon-icon'>
        <img src={pokemon.sprites.front_default} id={pokemon.id} onClick={() => {displaySelectedPokemon(pokemon.id)}}/>
      </div>
    )
  })



  return (
    <div className='all-pokemon-box scroll'>
    {allThePokemon}
    </div>
  )
}

export default AllPokemon
