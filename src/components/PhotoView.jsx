import React from 'react';
import PropTypes from 'prop-types';
import { LOAD_STATE } from '../constants/constants';
import PhotoContent from './PhotoContent';
import PageLoading from './reusable/PageLoading';

const PhotoView = props => (
  <div>
    <PhotoWrapper {...props} />
  </div>
);

PhotoView.propTypes = {};

export default PhotoView;

function PhotoWrapper(props) {
  const { loadStatePhotoInfo, loadStatePhotoInfoFromCollection } = props;
  if (
    loadStatePhotoInfo === LOAD_STATE.SUCCESS ||
    loadStatePhotoInfoFromCollection === LOAD_STATE.SUCCESS
  ) {
    return <PhotoContent {...props} />;
  }
  if (
    loadStatePhotoInfo === LOAD_STATE.LOADING &&
    loadStatePhotoInfoFromCollection === LOAD_STATE.LOADING
  ) {
    return <PageLoading />;
  }

  return <div>Error</div>;
}
