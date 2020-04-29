import React, { Component } from 'react'
import './SearchResults.css'

export default class SearchResults extends Component {
    
    render() {
        return (
            <div className='searchresults'>
                <ul>
                 {this.props.pokemonList.length && this.props.pokemonList.map(pokemon => <li className="singularPokemon" >
                        <h1>{pokemon.pokemon}</h1>
                        </li >)}
                { console.log(this.props.pokemonList) }
                <h1></h1>
                </ul>
            </div>
        )
    }
}
