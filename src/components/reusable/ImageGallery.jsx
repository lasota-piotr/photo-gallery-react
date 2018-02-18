import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageGalleryLayout = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: url("${props => props.src}") center no-repeat ${props =>
  props.color};
  background-size: cover;
`;

const ImageGallery = ({ alt, ...restProps }) => (
  <ImageGalleryLayout {...restProps} aria-label={alt || ''} role="img" />
);

ImageGallery.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  alt: PropTypes.string,
};

ImageGallery.defaultProps = {
  alt: '',
  color: '#fff',
};

export default ImageGallery;
