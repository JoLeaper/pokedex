import React, { Component } from 'react'
import SearchResults from './SearchResults.js'
import SearchBar from './SearchBar.js'
import request from 'superagent';
import './SearchPage.css'

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: [' ', 'normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'],
    desiredPokemonType: '',
    pokemonAttack: 0,
    pokemon: [],
    page: 1
  }
  componentDidMount = async () => {
    const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
    this.setState({ pokemon: fetchedPokemon.body.results })
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
  }

  handleNameChange = (event) => {
    this.setState({
      pokemonName: event.target.value
    })
  }

  handleAttackChange = (event) => {
      const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({
          pokemonAttack: event.target.value
         })
      }
  }

  handleClick = async () => {
    console.log('hello');
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
      <div className='search'>
        <SearchBar handleClick={this.handleClick} handleOrderChange={this.handleOrderChange} handleTypeChange={this.handleTypeChange} handleNameChange={this.handleNameChange} handleAttackChange={this.handleAttackChange} pokemonType={this.state.pokemonType} pokemonName={this.state.pokemonName} pokemonAttack={this.state.pokemonAttack} displayOrder={this.state.displayOrder}/>
        <SearchResults pokemonList={this.state.pokemon}/>
      </div>
    )
  }
}
