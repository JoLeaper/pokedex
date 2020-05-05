import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchResults.css'

export default class SearchResults extends Component {
    render() {
        return (
            <div className='searchresults'>
                 {this.props.pokemonList.map(pokemon =>
                    <li className="singularPokemon" >
                        <Link to={`/pokemon/${pokemon._id}`}>
                            <h2>{pokemon.pokemon}</h2>
                        </Link>
                        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
                        <p>Type: {pokemon.type_1}  {(pokemon.type_2 === 'NA') 
                            ?  null
                            : '/ ' + pokemon.type_2}</p>
                        <p>Ability: {pokemon.ability_1}</p>
                        <p>Hidden Ability: {pokemon.ability_2}</p>
                        <p>Base HP: {pokemon.hp}</p>
                        <p>Base Attack: {pokemon.attack}</p>
                        <p>Base Defense: {pokemon.defense}</p>
                        <p>Base Special Attack: {pokemon.special_attack}</p>
                        <p>Base Special Defense: {pokemon.special_defense}</p>
                        <p>Base Speed: {pokemon.speed}</p>
                    </li >
                    )}
            </div>
        )
    }
}
