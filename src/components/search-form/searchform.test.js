import React from 'react';
import { mount } from 'enzyme';
import SearchStandings from './searchform';

beforeAll(() => {
  const div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.body.appendChild(div);
});

describe('Tests of the search Component', () => {


  it('The component only have to be one text field', () => {
    const wrap = mount(<SearchStandings />);
    const inputs = wrap.find('[type="text"]');

    expect(inputs).toHaveLength(1);
  });

  it('Should disable button when input has no value', () => {
    let wrap = mount(<SearchStandings />);

    expect(wrap.find('button').prop('disabled')).toBeTruthy();

    wrap.find('input').simulate('change', { target: { value: '2013' } })
    wrap.update();

    expect(wrap.find('button').prop('disabled')).toBeFalsy();
  });


  it('Should not call onSubmit when the input is filled by text', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<SearchStandings onSubmit={onSubmit} />);

    wrapper.find('input').simulate('change', { target: { value: 'aaaa' } });
    wrapper.update();
    wrapper.find('form').simulate('submit', { preventDefault: () => null });

    expect(onSubmit.mock.calls.length).toEqual(0);
  });

});
