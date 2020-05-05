import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage'

test('renders learn react link', () => {
  const wrapper = shallow(<SearchPage />);
  expect(wrapper).toMatchSnapshot();
});



