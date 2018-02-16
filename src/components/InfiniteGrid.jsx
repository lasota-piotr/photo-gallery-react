import React from 'react';
import Waypoint from 'react-waypoint';
import CollectionPhoto from './CollectionPhoto';

const InfiniteGrid = ({ elements, loadMore }) => (
  <div>
    {elements.map((element, index) => (
      <CollectionPhoto photo={element} key={index} />
    ))}
    <Waypoint onEnter={loadMore} bottomOffset="-700px">
      <div>End of list</div>
    </Waypoint>
  </div>
);

export default InfiniteGrid;
