import React from 'react';
import styled from 'styled-components';
import CollectionsItemPhoto from './CollectionsItemPhoto';
import media from '../stylesUtils/media';

const CollectionsItemBodyContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 400px;

  ${media.xmobile`
    width: 100%;
    grid-template-columns: 1fr 1fr;
  `};
`;

function CollectionsItemBodyContent({ collectionPhotos = Array(4) }) {
  return (
    <CollectionsItemBodyContentLayout>
      {collectionPhotos.map((photo, index) => (
        <CollectionsItemPhoto
          src={photo.urls.thumb}
          key={index}
          color={photo.color}
          alt={photo.description}
        />
      ))}
    </CollectionsItemBodyContentLayout>
  );
}

export default CollectionsItemBodyContent;
