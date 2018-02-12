import React from 'react';
import Reviews from './Reviews';
import { shallow } from 'enzyme';

describe('Reviews', () => {
  // Mock Data
  const review = { text: 'This is a review', author: 'Author', date: 'Date' }

  // Empty Wrapper
  let wrapper = shallow(<Reviews />);

  it ('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  // Data Wrapper

  let dataWrapper = shallow(<Reviews {...review}/>);

  it('renders Review text', () => {
    expect(dataWrapper.find('h3').text()).toEqual('This is a review');
  });

  it('renders Review author', () => {
    expect(dataWrapper.find('h4').text()).toEqual('Author');
  });

  it('renders Review date', () => {
    expect(dataWrapper.find('h5').text()).toEqual('Date');
  });

})
