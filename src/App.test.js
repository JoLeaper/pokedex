import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import PokemonDetail from './PokemonDetail'

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

test('renders learn react link', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('renders learn react link', () => {
  const wrapper = shallow(<PokemonDetail />);
  expect(wrapper).toMatchSnapshot();
});


