import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const CollectionPhotoInfo = ({ likes, photoInfoIsLoading, photoInfo }) => {
  const { downloads, location } = photoInfo;
  const country = location && location.country;
  return (
    <div>
      <span>likes: {likes}</span>
      {photoInfoIsLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <span>Downloads: {downloads}</span>
          {!!country && <span>Country: {country}</span>}
        </Fragment>
      )}
    </div>
  );
};

CollectionPhotoInfo.propTypes = {};

export default CollectionPhotoInfo;
