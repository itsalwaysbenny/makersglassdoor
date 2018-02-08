import React from 'react';
import Company from './Company';
import { shallow } from 'enzyme';

it('render', () => {
  const wrapper = shallow(<Company name="Makers Academy" />);
  expect(wrapper.find('h3').text()).toEqual("Makers Academy");
});