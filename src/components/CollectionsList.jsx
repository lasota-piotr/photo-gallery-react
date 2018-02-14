import React from 'react';
import CollectionsListItem from './CollectionsListItem';
import Loading from './Loading';

const CollectionsList = ({ collection, ...restProps }) => (
  <div>
    {collection.id} {collection.title}
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
