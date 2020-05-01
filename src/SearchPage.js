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
    page: 1,
    link: 'https://alchemy-pokedex.herokuapp.com/api/pokedex?'
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

  handlePageChange = (event) => {
    let currentPage = this.state.page;
    if (event.target.value === 'next') {
      currentPage++;
    } else {
      currentPage--;
    }
    this.setState({
      page: currentPage
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
    let link = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?' 
    const currentPage = 'page=' + this.state.page;
    const searchedPokemon = 'pokemon=' + this.state.pokemonName;
    const minAttack = 'attack=' + this.state.pokemonAttack;
    
    let wantedType;
    if (this.state.desiredPokemonType !== 'none') {
      wantedType='type=' + this.state.desiredPokemonType
    }
    link = `${link}&${currentPage}&${searchedPokemon}&${minAttack}&${wantedType}`
    console.log(link);
    const fetchedPokemon = await request.get(`${link}`)
    this.setState({ pokemon: fetchedPokemon.body.results })
  }

  handlePageClick = (event) => {
    const currentPage = this.state.page;
    if(event.target.value === 'next' && currentPage < this.state.pokemon.length) {
      this.setState(prevState => ({ page: prevState.page + 1 }))
    }

    if(event.target.value === 'prev' && currentPage > 1) {
      this.setState(prevState => ({ page: prevState.page - 1 }))
    }

    this.handleClick();
  }

  render() {
    return (
      <div className='search'>
        <SearchBar handlePageClick={this.handlePageClick} handleClick={this.handleClick} handleOrderChange={this.handleOrderChange} handleTypeChange={this.handleTypeChange} handleNameChange={this.handleNameChange} handleAttackChange={this.handleAttackChange} pokemonType={this.state.pokemonType} pokemonName={this.state.pokemonName} pokemonAttack={this.state.pokemonAttack} displayOrder={this.state.displayOrder}/>
        <SearchResults pokemonList={this.state.pokemon}/>
      </div>
    )
  }
}
