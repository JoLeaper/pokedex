import React, { Component } from 'react'
import './SearchResults.css'

export default class SearchResults extends Component {
    
    render() {
        return (
            <div className='searchresults'>
                 {this.props.pokemonList.map(pokemon => 
                    <li className="singularPokemon" >
                        <h2>{pokemon.pokemon}</h2>
                        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
                    </li >)}
            </div>
        )
    }
}
