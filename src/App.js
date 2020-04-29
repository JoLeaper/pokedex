import React, { Component } from 'react'
import Header from './Header.js'
import SearchResults from './SearchResults.js'
import request from 'superagent';
import './App.css'

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: '',
    pokemonAttack: 0,
    pokemon: []
  }

  handleOrderChange = (event) => {
    this.setState({
      displayOrder: event.target.value
    })
  }

  handleNameChange = (event) => {
    this.setState({
      pokemonName: event.target.value
    })
  }

  handleClick = async () => {
    const searchedPokemon = this.state.pokemonName;
    const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${searchedPokemon}`)
    this.setState({ pokemon: fetchedPokemon.body.results })
    console.log(this.state.pokemon.results)
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='search'>
          <div className='searchbox'>
            <input value={this.state.PokemonName} onChange={this.handleNameChange}>
            </input>
              <select value={this.state.displayOrder} onChange={this.handleOrderChange}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
                
              </select>
              <button onClick={this.handleClick}>Search</button>
        </div>
          <SearchResults pokemonList={this.state.pokemon}/>
        </div>
      </div>
    )
  }
}
