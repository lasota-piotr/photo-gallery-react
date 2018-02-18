import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkToPhoto = ({
  children,
  id,
  state,
}) => (
  <Link
    to={{
      pathname: `/photos/${id}`,
      state,
    }}
  >
    {children}
  </Link>
);

LinkToPhoto.propTypes = {};

export default LinkToPhoto;
