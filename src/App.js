import React, { Component } from 'react'
import Header from './Header.js'
import SearchResults from './SearchResults.js'
import './App.css'

export default class App extends Component {
  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: '',
    PokemonAttack: 0,
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
    console.log(event.target.value);
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
        </div>
          <SearchResults />
        </div>
      </div>
    )
  }
}
