import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'

test('renders header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});






