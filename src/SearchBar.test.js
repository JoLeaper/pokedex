import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar'
const pokemonType = ['', 'normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'];

test('renders searchbar', () => {
    const wrapper = shallow(<SearchBar pokemonType={pokemonType} />);
    expect(wrapper).toMatchSnapshot();
});
