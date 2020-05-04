import React, { Component } from 'react'
import SearchResults from './SearchResults.js'
import SearchBar from './SearchBar.js'
import request from 'superagent';
import './SearchPage.css'
const pokemonType = ['', 'normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'];

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    desiredPokemonType: '',
    pokemonAttack: 0,
    pokemon: [],
    page: 1,
    body: [],
    link: 'https://alchemy-pokedex.herokuapp.com/api/pokedex',
    searchQuery: ''
  }
  componentDidMount = async () => {
    // grabs everything after question mark in URL
    const searchParams = new URLSearchParams(window.location.search);
    // ?pokemon=${query}&page=${page}
    //looks for pokemon key in url, sets value equal to query
    const query = searchParams.get('pokemon');
    // 
    this.setState ({searchQuery: query});
    if (query) {
      let page = 1;
      if (searchParams.get('page')){
        page = searchParams.get('page');
      }
      const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`);
      this.setState({ body: fetchedPokemon.body, pokemon: fetchedPokemon.body.results });
    } else {
      const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
      this.setState({ body: fetchedPokemon.body, pokemon: fetchedPokemon.body.results })
    }
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
      searchQuery: event.target.value
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

  handleClick = async (page) => {
    let link = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?' 
    const currentPage = '&page=' + page;
    const wantedOrder = '&sort=id&direction=' + this.state.displayOrder;
    const searchedPokemon = '&pokemon=' + this.state.pokemonName;
    const minAttack = '&attack=' + this.state.pokemonAttack;
    let wantedType;

    if (this.state.desiredPokemonType !== '') {
      wantedType='&type=' + this.state.desiredPokemonType
    } else {
      wantedType = '';
    }
    link = `${link}${currentPage}${searchedPokemon}${minAttack}${wantedOrder}${wantedType}`
    const fetchedPokemon = await request.get(`${link}`)
    this.setState({body: fetchedPokemon.body, pokemon: fetchedPokemon.body.results, link: link })

  }

  handlePageClick = (event) => {
    const currentPage = this.state.page;
    if(event.target.value === 'next' && currentPage < Math.ceil(this.state.body.count / this.state.body.perPage)) {
      this.setState(prevState => ({ page: prevState.page + 1 }))
      this.handleClick(this.state.page + 1);
    }

    if(event.target.value === 'prev' && currentPage > 1) {
      this.setState(prevState => ({ page: prevState.page - 1 }))
      this.handleClick((this.state.page - 1));
    }
  }

  render() {
    return (
      <div className='search'>
        <SearchBar handlePageClick={this.handlePageClick} handleClick={this.handleClick} handleOrderChange={this.handleOrderChange} handleTypeChange={this.handleTypeChange} handleNameChange={this.handleNameChange} handleAttackChange={this.handleAttackChange} pokemonType={pokemonType} pokemonName={this.state.searchQuery} pokemonAttack={this.state.pokemonAttack} displayOrder={this.state.displayOrder}/>
        <SearchResults pokemonList={this.state.pokemon}/>
      </div>
    )
  }
}
