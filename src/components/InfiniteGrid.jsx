import React from 'react';

const InfiniteGrid = ({elements}) => {
  return (
    <div>
      {elements.map(element => (
        <img src={element.urls.small} key={element.id} />
      ))}
    </div>
  );
};

export default InfiniteGrid;
