import React from 'react';
import ReactDOM from 'react-dom';

import Character from '../components/characters/Character';

describe('Character Component', () => {
  it('should render Character', () => {
    const props = {
      character: {
        name: 'Hawkeye',
        description: 'poop'
      }
    };

    const wrapper = shallow(<Character {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
