import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import LinkToPhoto from './LinkToPhoto';

test("Generates anchor with url to photo's page", () => {
  const component = renderer.create(
    <MemoryRouter>
      <LinkToPhoto id="123456">Test link</LinkToPhoto>
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
