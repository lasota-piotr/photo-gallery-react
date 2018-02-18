import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import CollectionPhoto from './CollectionPhoto';
import Loading from './reusable/Loading';

const InfiniteGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-column-gap: ${props => props.theme.unitLarge};
  grid-row-gap: ${props => props.theme.unitLarge};
`;

const InfiniteGrid = ({ elements, loadMore, isLoading }) => (
  <InfiniteGridLayout>
    {elements.map((element, index) => (
      <CollectionPhoto photo={element} key={index} />
    ))}
    <Waypoint onEnter={loadMore} bottomOffset="-700px">
      <div>{isLoading ? <Loading /> : <div>End of list</div>}</div>
    </Waypoint>
  </InfiniteGridLayout>
);

export default InfiniteGrid;
