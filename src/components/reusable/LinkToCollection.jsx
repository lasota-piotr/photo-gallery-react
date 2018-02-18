import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from '../../helpers/slugify';

const LinkToCollection = ({ children, id, title }) => (
  <Link to={`/collections/${id}/${slugify(title).slice(0, 25)}`}>
    {children}
  </Link>
);

LinkToCollection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkToCollection;
