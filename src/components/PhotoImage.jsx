import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../stylesUtils/media';

const PhotoImageStyled = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #fff;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  background-image: url("${props => props.srcRegular}");
  ${media.desktop`
    background-image: url("${props => props.srcSmall}");
  `};
`;

const PhotoImage = ({ srcRegular, srcSmall, alt }) => (
  <div>
    <PhotoImageStyled
      srcRegular={srcRegular}
      srcSmall={srcSmall}
      role="img"
      aria-label={alt}
    />
  </div>
);

PhotoImage.propTypes = {};

export default PhotoImage;
