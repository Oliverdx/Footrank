import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MultipleGroups from './multiple-groups';

describe('Tests of Multiple groups Component', () => {

  it('Prevent the component to not render if not receive props', () => {
    const component = renderer
      .create(<MultipleGroups />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Have to return two groups only with the title', () => {
    const mock = [{ group: 'GROUP A' }, { group: 'GROUP B' }]

    const component = mount(<MultipleGroups standings={mock} />);

    expect(component.find('h3').length).toEqual(2);
  });

});


