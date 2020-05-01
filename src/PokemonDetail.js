import React, { Component } from 'react'
import request from 'superagent';

export default class PokemonDetail extends Component {
    state = {
        pokemon: null
    };
    componentDidMount = async () => {
        const pokemonId = this.props.match.params.id
        const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokemonId}`);
        this.setState({
            pokemon: fetchedPokemon.body
        }
        )
        console.log(this.state.pokemon);
    }
    render() {
        return this.state.pokemon ?
            <div>
                <h2>{this.state.pokemon.pokemon}</h2>
                <img src={this.state.pokemon.url_image} alt={this.state.pokemon.pokemon} />
                <p>Type: {this.state.pokemon.type_1}  {(this.state.pokemon.type_2 === 'NA')
                    ? null
                    : '/ ' + this.state.pokemon.type_2}</p>
                <p>Ability: {this.state.pokemon.ability_1}</p>
                <p>Hidden Ability: {this.state.pokemon.ability_2}</p>
                <p>Base HP: {this.state.pokemon.hp}</p>
                <p>Base Attack: {this.state.pokemon.attack}</p>
                <p>Base Defense: {this.state.pokemon.defense}</p>
                <p>Base Special Attack: {this.state.pokemon.special_attack}</p>
                <p>Base Special Defense: {this.state.pokemon.special_defense}</p>
                <p>Base Speed: {this.state.pokemon.speed}</p>
            </div>
            :
            <img src='https://i.giphy.com/media/jQbinPsqqfg8GFxbQw/giphy.webp' alt='loading'></img>
    }
}
