import React from 'react';
import PropTypes from 'prop-types';
import PhotoImage from './PhotoImage';
import PhotoContentBody from './PhotoContentBody';

const PhotoContent = ({ photoInfoCollapsed }) => (
  <div>
    <PhotoImage
      srcRegular={photoInfoCollapsed.urls.regular}
      srcSmall={photoInfoCollapsed.urls.small}
      alt={
        photoInfoCollapsed.description || photoInfoCollapsed.categories.join()
      }
    />
    <PhotoContentBody photoInfoCollapsed={photoInfoCollapsed} />
  </div>
);

PhotoContent.propTypes = {};

export default PhotoContent;
