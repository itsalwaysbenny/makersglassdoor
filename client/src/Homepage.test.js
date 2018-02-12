import React from 'react';
import Homepage from './Homepage';
import { shallow } from 'enzyme';

describe('Homepage', () => {

  let wrapper = shallow(<Homepage />);

  it ('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  });
})
