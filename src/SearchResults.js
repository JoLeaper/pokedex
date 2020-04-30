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
                            
                            <p>Ability: {pokemon.ability_1}</p>
                            <p>Hidden Ability: {pokemon.ability_2}</p>
                            <p>Base HP: {pokemon.hp}</p>
                            <p>Base Attack: {pokemon.attack}</p>
                            <p>Base Defense: {pokemon.defense}</p>
                            <p>Base Special Attack: {pokemon.special_attack}</p>
                            <p>Base Special Defense: {pokemon.special_defense}</p>
                            <p>Base Speed: {pokemon.speed}</p>
                    </li >)}
            </div>
        )
    }
}
