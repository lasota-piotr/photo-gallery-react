import React from 'react';

const CollectionsListItem = ({ collectionPhotos }) => (
  <span>
    <img src={collectionPhotos.urls.thumb} />
  </span>
);

export default CollectionsListItem;
