import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Standings from './standings';

describe('Tests of the Standings Component', () => {

    it('Prevent the component to not render if not receive props', () => {
        const component = renderer
            .create(<Standings />)
            .toJSON();

        expect(component).toMatchSnapshot();
    });
});
