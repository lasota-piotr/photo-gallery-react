import React from 'react';
import { Link } from 'react-router-dom';
import CollectionsListItem from './CollectionsListItem';
import Loading from './Loading';
import slugify from '../helpers/slugify';

const CollectionsList = ({ collection, ...restProps }) => (
  <div>
    <Link
      to={`/collections/${collection.id}/${slugify(collection.title).slice(
        0,
        25
      )}`}
    >
      {collection.title}
    </Link>
    <br />
    <CollectionListBody {...restProps} />
  </div>
);

export default CollectionsList;

function CollectionListBody({ isLoading, isError, collectionPhotos }) {
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return <CollectionListItems collectionPhotos={collectionPhotos} />;
}

function CollectionListItems({ collectionPhotos }) {
  return (
    <div>
      {collectionPhotos.map((photo, index) => (
        <CollectionsListItem photo={photo} key={index} />
      ))}
    </div>
  );
}
