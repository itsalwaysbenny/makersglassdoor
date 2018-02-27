import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';

describe('Layout', () => {

  let wrapper = shallow(<Layout />);

  it ('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  });
})
