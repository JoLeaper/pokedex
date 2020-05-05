import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

test('creates the app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});




