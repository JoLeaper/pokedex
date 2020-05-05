import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults'
const pokemon = [0];

test('renders search results', () => {
    const wrapper = shallow(<SearchResults pokemonList={pokemon} />);
    expect(wrapper).toMatchSnapshot();
});
