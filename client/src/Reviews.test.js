import React from 'react';
import Reviews from './Reviews';
import { shallow } from 'enzyme';

describe('Reviews', () => {

  let wrapper = shallow(<Reviews />);

  it ('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })
})
