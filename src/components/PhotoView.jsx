import React from 'react';
import PropTypes from 'prop-types';
import { LOAD_STATE } from '../constants/constants';
import Loading from './Loading';
import PhotoContent from './PhotoContent';

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
    return (
      <PhotoContent
        {...props}
      />
    );
  }
  if (
    loadStatePhotoInfo === LOAD_STATE.LOADING &&
    loadStatePhotoInfoFromCollection === LOAD_STATE.LOADING
  ) {
    return <Loading />;
  }

  return <div>Error</div>;
}
