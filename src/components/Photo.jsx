import React from 'react';

const Photo = ({ match }) => {
  const { params } = match;
  return <div>Photo {params.id}</div>;
};

export default Photo;
