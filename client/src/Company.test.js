import React from 'react';
import Company from './Company';
import { shallow } from 'enzyme';

describe('Company', () => {
  // Mock Data
  const company = { name: "Makers Academy", size : "200" }

  // Empty Wrapper
  let wrapper = shallow(<Company />);

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  // Wrapper with Data
  let dataWrapper = shallow(<Company {...company}/>);

  it('renders Company name', () => {
    expect(dataWrapper.find('h3').text()).toEqual("Company Name: Makers Academy");
  });

  it('renders Company size', () => {
    expect(dataWrapper.find('h4').text()).toEqual("Company Size: 200")
  });

  it('renders the Company logo', () => {
    expect(dataWrapper.find('img').exists()).toEqual(true);
  });
});
