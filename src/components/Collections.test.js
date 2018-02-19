import React from 'react';
import renderer from 'react-test-renderer';
import Collections from './Collections';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

test('Renders Collections correctly', () => {
  const component = renderer.create(<Collections />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
