import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

test('Generates Avatar', () => {
  const component = renderer.create(
    <Avatar name="John" src="example.com.jpg" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
