import React from 'react';
import Cell from './Cell';
import { shallow } from "enzyme";

describe('<Cell /> rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cell isLit={true} />);
  });

  describe('lit cell', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('not lit', () => {
    it('renders correctly', () => {
      wrapper = shallow(<Cell isLit={false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
