import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import LinkToCollection from './LinkToCollection';

test("Generates anchor with url to collection's page", () => {
  const component = renderer.create(
    <MemoryRouter>
      <LinkToCollection id="123456" title="test title - @">Test link</LinkToCollection>
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
