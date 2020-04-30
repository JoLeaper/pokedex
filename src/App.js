import React, { Component } from 'react'
import Header from './Header.js'
import SearchResults from './SearchResults.js'
import request from 'superagent';
import './App.css'

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: ['normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'],
    desiredPokemonType: '',
    pokemonAttack: 0,
    pokemon: []
  }

  handleOrderChange = (event) => {
    this.setState({
      displayOrder: event.target.value
    })
  }

  handleTypeChange = (event) => {
    this.setState({
      desiredPokemonType: event.target.value
      
    })
    console.log(this.state.pokemonType)
  }

  handleNameChange = (event) => {
    this.setState({
      pokemonName: event.target.value
    })
  }

  handleClick = async () => {
    const searchedPokemon = this.state.pokemonName;
    const wantedType = this.state.desiredPokemonType;
    const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${searchedPokemon}&type=${wantedType}`)
    this.setState({ pokemon: fetchedPokemon.body.results })
    console.log(fetchedPokemon)
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

              <select onChange={this.handleTypeChange}>
                {
                this.state.pokemonType.map(type => 
                <option value={type}>{type}</option>
                 )
                 }
              </select>

              <button onClick={this.handleClick}>Search</button>
        </div>
        
          <SearchResults pokemonList={this.state.pokemon}/>


        </div>
      </div>
    )
  }
}
