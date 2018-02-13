import React from 'react';

const Collection = ({ match }) => {
  const { params } = match;
  return (
    <div>
      Collection {params.id} {params.name}
    </div>
  );
};

export default Collection;
