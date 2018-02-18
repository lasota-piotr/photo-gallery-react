import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGallery from './reusable/ImageGallery';
import CollectionPhotoInfo from './CollectionPhotoInfo';
import LinkToPhoto from './reusable/LinkToPhoto';

const CollectionPhotoContentImage = styled(ImageGallery)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.5s 0.2s;
  }
  &:hover {
    &:after {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const CollectionPhotoContent = ({
  photoInfoFromCollection,
  photoInfo,
  photoInfoIsLoading,
  mouseIsOver,
  onMouseEnterHandle,
  onMouseLeaveHandle,
}) => (
  <LinkToPhoto
    id={photoInfoFromCollection.id}
    state={{
      photoInfo,
      photoInfoFromCollection,
      modal: true,
    }}
  >
    <CollectionPhotoContentImage
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
      src={photoInfoFromCollection.urls.small}
      alt={photoInfoFromCollection.description}
    >
      {mouseIsOver && (
        <CollectionPhotoInfo
          likes={photoInfoFromCollection.likes}
          photoInfoIsLoading={photoInfoIsLoading}
          photoInfo={photoInfo}
        />
      )}
    </CollectionPhotoContentImage>
  </LinkToPhoto>
);

CollectionPhotoContent.propTypes = {};

export default CollectionPhotoContent;
