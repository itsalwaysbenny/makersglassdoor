import React from 'react';
import Company from './Company';
import { shallow } from 'enzyme';

describe('Company', () => {
  // Mock Data
  const company = { name: "Makers Academy", size : "200", description: "Makers Academy is a fully immersive...", stack: "Ruby, Javascript, Rails, TDD, HTML, git" }

  // Empty Wrapper
  let wrapper = shallow(<Company />);

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  // Wrapper with Data
  let dataWrapper = shallow(<Company {...company}/>);

  it('renders Company name', () => {
    expect(dataWrapper.find('h3').text()).toEqual("Makers Academy");
  });

  it('renders Company size', () => {
    expect(dataWrapper.find('h4').first().text()).toEqual("Tech Team Size  200")
  });

  it('renders the Company logo', () => {
    expect(dataWrapper.find('img').exists()).toEqual(true);
  });

  it('renders the Company description', () =>{
    expect(dataWrapper.find('p').text()).toEqual("Description: Makers Academy is a fully immersive...")
  })
  it('renders the Tech Stack', () => {
    expect(dataWrapper.find('h5').text()).toEqual("Ruby, Javascript, Rails, TDD, HTML, git")
  })
});
