import React from 'react';
import Waypoint from 'react-waypoint';
import CollectionPhoto from './CollectionPhoto';
import Loading from './reusable/Loading';

const InfiniteGrid = ({ elements, loadMore, isLoading }) => (
  <div>
    {elements.map((element, index) => (
      <CollectionPhoto photo={element} key={index} />
    ))}
    <Waypoint onEnter={loadMore} bottomOffset="-700px">
      <div>{isLoading ? <Loading /> : <div>End of list</div>}</div>
    </Waypoint>
  </div>
);

export default InfiniteGrid;
