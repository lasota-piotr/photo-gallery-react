import React from 'react';
import styled from 'styled-components';
import LinkToCollection from './reusable/LinkToCollection';
import CollectionsItemBody from './CollectionsItemBody';
import media from '../stylesUtils/media';

const CollectionsItemTitle = styled.h3`
  margin-bottom: ${props => props.theme.unitTiny};
  width: 100%;
`;

const CollectionsItemLayout = styled.div`
  margin-bottom: ${props => props.theme.unit};
  justify-self: center;
  ${media.xmobile`
    width: 100%;
  `};
`;

const CollectionsItem = ({
  collectionInfo,
  collectionPhotos,
  ...restProps
}) => (
  <CollectionsItemLayout>
    <LinkToCollection
      id={collectionInfo.id}
      title={collectionInfo.title}
      state={{ collectionInfo, collectionPhotos }}
    >
      <CollectionsItemTitle>{collectionInfo.title}</CollectionsItemTitle>
      <CollectionsItemBody collectionPhotos={collectionPhotos} {...restProps} />
    </LinkToCollection>
  </CollectionsItemLayout>
);

export default CollectionsItem;
