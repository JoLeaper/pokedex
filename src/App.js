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
    pokemon:[]
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
    const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?search=${this.state.PokemonName}`)
    this.setState({ pokemon: fetchedPokemon.body })
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='search'>
          <div className='searchbox'>
            <input value={this.state.pokemonName} onChange={this.handleNameChange}>
            </input>
              <select value={this.state.displayOrder} onChange={this.handleOrderChange}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
                
              </select>
              <button onClick={this.handleClick}>Search</button>
        </div>
          <SearchResults pokemonResults={this.state.pokemon}/>
        </div>
      </div>
    )
  }
}
