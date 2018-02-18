import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkToPhoto = ({ children, id, state }) => (
  <Link
    to={{
      pathname: `/photos/${id}`,
      state,
    }}
  >
    {children}
  </Link>
);

LinkToPhoto.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  state: PropTypes.object,
};

export default LinkToPhoto;
