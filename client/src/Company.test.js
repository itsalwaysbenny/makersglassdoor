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
    expect(dataWrapper.find('h3').text()).toEqual(company.name);
  });

  it('renders Company size', () => {
    expect(dataWrapper.find('h4').text()).toEqual(company.size)
  })
});
