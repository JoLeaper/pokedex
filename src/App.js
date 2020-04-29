import React, { Component } from 'react'
import Header from './Header.js'
import SearchResults from './SearchResults.js'
import './App.css'

export default class App extends Component {
  state = {
    pokemonName: '',
    pokemonType: '',
    PokemonAttack: 0,
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='search'>
          <div className='searchbox'>
            <input>
            </input>
              <select option>
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
