import React from 'react';

const CollectionsListItem = ({ photo }) => (
  <span>
    <img src={photo.urls.thumb} />
  </span>
);

export default CollectionsListItem;
