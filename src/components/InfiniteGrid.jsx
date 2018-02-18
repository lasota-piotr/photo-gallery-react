import React, { Fragment } from 'react';
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

const InfiniteGridPlaceholder = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfiniteGrid = ({ elements, loadMore, isLoading }) => (
  <Fragment>
    <InfiniteGridLayout>
      {elements.map((element, index) => (
        <CollectionPhoto photo={element} key={index} />
      ))}
    </InfiniteGridLayout>
    <Waypoint onEnter={loadMore} bottomOffset="-700px">
      <InfiniteGridPlaceholder>
        {isLoading ? <Loading /> : <div>End of list</div>}
      </InfiniteGridPlaceholder>
    </Waypoint>
  </Fragment>
);

export default InfiniteGrid;
