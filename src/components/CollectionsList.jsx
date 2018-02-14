import React from 'react';

const CollectionsList = ({ children, collection }) => (
  <div>
    {collection.id} {collection.title}
    <br />
    {children}
  </div>
);

export default CollectionsList;
