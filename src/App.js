import logo from './logo.svg';
import './App.css';
import { React, Component } from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import Pokemon from './Pokemon.js'
import Nav from './Nav.js'
import AllPokemon from './AllPokemon.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentPokemon: '',
      allPokemon: []
    }
    this.displayNewPokemon = this.displayNewPokemon.bind(this)
    this.displayAllPokemon = this.displayAllPokemon.bind(this)
    this.displaySelectedPokemon = this.displaySelectedPokemon.bind(this)
  }

  getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
 }

  componentDidMount = () => {
    const numsArray = []

    for (let i = 0; i <= 150; i++) {
      numsArray.push(i);
    }

    let num = this.getRandomIndex(numsArray)

    const numsArray1 = []

    for (let i = 1; i <= 150; i++) {
      numsArray1.push(i);
    }

    const allPokemonArray = []

    numsArray1.forEach((number) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(response => response.json())
        .then(data => allPokemonArray.push(data))
    })




    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(response => response.json())
    .then(data => this.setState({ currentPokemon: data, allPokemon: allPokemonArray}))
  }

  displayNewPokemon() {
    const numsArray = []

    for (let i = 0; i <= 150; i++) {
      numsArray.push(i);
    }

    let num = this.getRandomIndex(numsArray)

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(response => response.json())
    .then(data => this.setState({ currentPokemon: data }))
  }




  displaySelectedPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ currentPokemon: data }))
  }

  displayAllPokemon() {
    console.log(this.state.allPokemon)
this.setState({ currentPokemon: '' })

  }


  render() {
    return (
      <main>
        <Nav displayNewPokemon={this.displayNewPokemon} displayAllPokemon={this.displayAllPokemon} />
        <Switch>
          <Route
          path="/"
            render={() =>
              <div className="App" style={{
                backgroundImage: `url("https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
              }}>
                {this.state.currentPokemon && <Pokemon currentPokemon={this.state.currentPokemon} />}
                {!this.state.currentPokemon && <AllPokemon allPokemon={this.state.allPokemon} displaySelectedPokemon={this.displaySelectedPokemon}/>}
              </div>
            }
          />
        </Switch>

      </main>
    );
  }
}

export default App
