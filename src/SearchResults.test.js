import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults'

test('renders learn react link', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper).toMatchSnapshot();
});
