import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CompanyPage from '../CompanyPage'

describe('<Carousel />', () => {
  it('renders the carousel', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.exists('.carousel')).toBe(true);
    // expect(wrapper.exists('.katie')).toBe(false);
  });
});

describe('<CompanyPage />', () => {
    it('renders the stock card', () => {
      const stockCard = shallow(<CompanyPage />);
      expect(stockCard.exists('.wrapper')).toBe(true);
    });
  });

configure({ adapter: new Adapter() });


