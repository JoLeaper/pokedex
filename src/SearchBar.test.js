import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar'

test('renders learn react link', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
});
