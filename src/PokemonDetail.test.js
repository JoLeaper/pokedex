import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetail from './PokemonDetail'

test('renders learn react link', () => {
  const wrapper = shallow(<PokemonDetail />);
  expect(wrapper).toMatchSnapshot();
});



