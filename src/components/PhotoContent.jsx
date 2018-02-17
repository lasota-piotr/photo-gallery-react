import React from 'react';
import PropTypes from 'prop-types';
import PhotoImage from './PhotoImage';
import PhotoContentBody from './PhotoContentBody';
import { LOAD_STATE } from '../constants/constants';

const PhotoContent = ({ photoInfoCollapsed, loadStatePhotoInfo }) => (
  <div>
    <PhotoImage
      srcRegular={photoInfoCollapsed.urls.regular}
      srcSmall={photoInfoCollapsed.urls.small}
      alt={
        photoInfoCollapsed.description || photoInfoCollapsed.categories.join()
      }
    />
    <PhotoContentBody photoInfoCollapsed={photoInfoCollapsed} additionalInfoIsLoading={loadStatePhotoInfo === LOAD_STATE.LOADING} />
  </div>
);

PhotoContent.propTypes = {};

export default PhotoContent;
