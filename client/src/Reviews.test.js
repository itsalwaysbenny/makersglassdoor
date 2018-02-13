import React from 'react';
import Reviews from './Reviews';
import { shallow } from 'enzyme';

describe('Reviews', () => {
  // Mock Data
  const review = { text: 'This is a review', author: 'Author', date:'Date' }

  // Empty Wrapper
  let wrapper = shallow(<Reviews />);

  it ('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  // Data Wrapper

  let dataWrapper = shallow(<Reviews {...review}/>);

  it('renders Review text', () => {
    expect(dataWrapper.find('h3').at(0).props().children).toEqual('This is a review');
  });

  it('renders Review author', () => {
    expect(dataWrapper.find('h4').first().text()).toEqual('Written By: Author');
  });

  it('renders Review date', () => {
    expect(dataWrapper.find('h4').at(1).text()).toEqual("on Date");
  });
});
