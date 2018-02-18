import React from 'react';
import styled from 'styled-components';


const CollectionsItemPhotoLayout = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: url("${props => props.src}") center no-repeat ${props =>
  props.color};
  background-size: cover;
`;

const CollectionsItemPhoto = ({ src, alt, color }) => (
  <CollectionsItemPhotoLayout
    color={color}
    src={src}
    aria-label={alt}
    role="img"
  />
);

export default CollectionsItemPhoto;
