import React, { Component } from 'react'
import Header from './Header.js'
import SearchResults from './SearchResults.js'
import request from 'superagent';
import './App.css'

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: ['none', 'normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'],
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

  handleAttackChange = (event) => {
    this.setState({
      pokemonAttack: event.target.value
    })
  }

  handleClick = async () => {
    const searchedPokemon = this.state.pokemonName;
    const minAttack = this.state.pokemonAttack;
    let wantedType;
    if (this.state.desiredPokemonType !== 'none') {
      wantedType='&type=' + this.state.desiredPokemonType
    }

    const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${searchedPokemon}${wantedType}&attack=${minAttack}&sort=id&direction=${this.state.displayOrder}`)
    this.setState({ pokemon: fetchedPokemon.body.results })
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='search'>
          <div className='searchbox'>
            Name:
            <input value={this.state.PokemonName} onChange={this.handleNameChange}>
            </input>
              Display Order (By Pokedex Number):
              <select value={this.state.displayOrder} onChange={this.handleOrderChange}>
                <option value='asc'>Early Pokemon</option>
                <option value='desc'>Later Pokemon</option>
                
              </select>
              Type:
              <select onChange={this.handleTypeChange}>
                {
                this.state.pokemonType.map(type => 
                <option value={type}>{type}</option>
                 )
                 }
              </select>

              Minimum Attack Of:<input value={this.state.pokemonAttack} onChange={this.handleAttackChange}>
              </input>
              <button onClick={this.handleClick}>Search</button>
        </div>
        
          <SearchResults pokemonList={this.state.pokemon}/>


        </div>
      </div>
    )
  }
}
