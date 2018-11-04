import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';

describe('<Carousel />', () => {
  it('renders paragraphs', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.exists('.carousel')).toBe(true);
    expect(wrapper.exists('.katie')).toBe(false);
  });
});
