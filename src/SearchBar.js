import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='searchbox'>
            Name:
            <input value={this.props.PokemonName} onChange={this.props.handleNameChange}>
            </input>
              Display Order (By Pokedex Number):
              <select value={this.props.displayOrder} onChange={this.props.handleOrderChange}>
                <option value='asc'>Early Pokemon</option>
                <option value='desc'>Later Pokemon</option>
                
              </select>
              Type:
              <select onChange={this.props.handleTypeChange}>
                {
                this.props.pokemonType.map(type => 
                <option value={type}>{type}</option>
                 )
                 }
              </select>
                Minimum Attack Of:<input value={this.props.pokemonAttack} onChange={this.props.handleAttackChange}>
              </input>
              <button onClick={this.props.handleClick}>Search</button>
              <span>
              </span>
            </div>
        )
    }
}
