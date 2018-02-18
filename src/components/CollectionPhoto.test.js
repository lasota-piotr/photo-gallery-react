import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CollectionPhoto from './CollectionPhoto';
import { unsplashDatagetCollectionPhotos } from '../api/unsplashMockData';

jest.useFakeTimers();

test('Generates CollectionPhoto', () => {
  const component = renderer.create(
    <MemoryRouter>
      <CollectionPhoto photo={unsplashDatagetCollectionPhotos[0]} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  const innerDiv = tree.children[0].props;

  // manually trigger the callback
  innerDiv.onMouseEnter();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);

  // manually trigger the callback
  innerDiv.onMouseLeave();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
});
