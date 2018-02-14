import React from 'react';
import Waypoint from 'react-waypoint';

const InfiniteGrid = ({ elements, loadMore }) => (
  <div>
    {elements.map((element, index) => (
      <img src={element.urls.small} key={index} />
    ))}
    <Waypoint onEnter={loadMore} bottomOffset="-700px">
      <div>End of list</div>
    </Waypoint>
  </div>
);

export default InfiniteGrid;
