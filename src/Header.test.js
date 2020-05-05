import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'

test('renders learn react link', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});






