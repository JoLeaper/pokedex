import React from 'react';
import { shallow } from 'enzyme';
import SortSelector from './SortSelector'

test('renders sort selector', () => {
    const wrapper = shallow(<SortSelector />);
    expect(wrapper).toMatchSnapshot();
});
