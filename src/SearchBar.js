import React, { Component } from 'react'
import SortSelector from './SortSelector'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='searchbox'>
        Name:
        <input value={this.props.pokemonName} onChange={this.props.handleNameChange}>
        </input>
        {/* <select value={this.props.sortBy} onChange={this.props.handleSortChange}> */}
        <SortSelector
          displayOrder={this.props.displayOrder}
          sortBy={this.props.sortBy}
          handleOrderChange={this.props.handleOrderChange}
          handleSortChange={this.props.handleSortChange} />
        {/* </select> */}
        {/* <SortSelector displayOrder = {this.props.displayOrder} onChange={this.props.handleOrderChange} */}
        {/* Display Ord        <select value={this.props.displayOrder} onChange={this.props.handleOrderChange}>
          <option value='asc'>Ascending</option>er (By Pokedex Number):

          <option value='desc'>Descending</option>

        </select>
        <select value={this.props.sortBy} onChange={this.props.handleSortChange}>
          <option value='id'>ID</option>
          <option value='attack'>Attack</option>
          <option value='defense'>Defense</option>
        </select> */}
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
        <button onClick={this.props.handlePageClick} value='next'>Next Page</button>
        <button onClick={this.props.handlePageClick} value='prev'>Previous Page</button>
        <span>
        </span>
      </div>
    )
  }
}
