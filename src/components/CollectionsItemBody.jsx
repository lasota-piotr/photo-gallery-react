import React from 'react';
import styled from 'styled-components';
import Loading from './reusable/Loading';
import CollectionsItemBodyContent from './CollectionsItemBodyContent';
import media from '../stylesUtils/media';

const CollectionsItemBodyContentPlaceholder = styled.div`
  width: 400px;
  padding-bottom: 40%;
  display: flex;
  position: relative;
  ${media.xmobile`
    width: 100%;
    padding-bottom: 250%;
  `};
`;

const CollectionsItemBodyContentPlaceholderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function CollectionsItemBody({ isLoading, isError, collectionPhotos }) {
  if (isLoading) {
    return (
      <CollectionsItemBodyContentPlaceholder>
        <CollectionsItemBodyContentPlaceholderContent>
          <Loading />
        </CollectionsItemBodyContentPlaceholderContent>
      </CollectionsItemBodyContentPlaceholder>
    );
  }
  if (isError) {
    return (
      <CollectionsItemBodyContentPlaceholder>
        <CollectionsItemBodyContentPlaceholderContent>
          <div>Error</div>
        </CollectionsItemBodyContentPlaceholderContent>
      </CollectionsItemBodyContentPlaceholder>
    );
  }

  return <CollectionsItemBodyContent collectionPhotos={collectionPhotos} />;
}

export default CollectionsItemBody;
