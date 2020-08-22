import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import StandingsItem from './standings-item';

describe('Test if the component is showing the elements', () => {

  it('Prevent the component to not render', () => {
    const component = renderer
      .create(<StandingsItem />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Render the component correctly with the data passed', () => {
    const mock = {
      position: 1,
      team: { name: 'Lorem Ipsum' },
      won: '10',
      lost: '5',
      draw: '2',
      points: '32'
    }

    const component = renderer
      .create(<StandingsItem standings={mock} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

});
