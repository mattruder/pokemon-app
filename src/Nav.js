import { React, Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav({ displayNewPokemon, displayAllPokemon }) {
  return (
    <div className="nav">
      <h1>Pokemon API Fun</h1>
      <h1 className="new-btn" onClick={displayNewPokemon}>Random Pokemon</h1>
      <h1 className="all-btn" onClick={displayAllPokemon}>View All</h1>
    </div>
  )
}

export default Nav
