import React from 'react';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('<Main />', () => {
  it('should render a <main> tag', () => {
    const renderedComponent = shallow(<Main />);
    expect(renderedComponent.type()).toEqual('main');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Main />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Main id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Main attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
