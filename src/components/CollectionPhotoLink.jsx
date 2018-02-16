import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CollectionPhotoLink = ({
  children,
  photoId,
  photoInfo,
  photoInfoFromCollection,
}) => (
  <Link
    to={{
      pathname: `/photos/${photoInfoFromCollection.id}`,
      state: {
        photoInfo,
        photoInfoFromCollection,
        modal: true,
      },
    }}
  >
    {children}
  </Link>
);

CollectionPhotoLink.propTypes = {};

export default CollectionPhotoLink;
