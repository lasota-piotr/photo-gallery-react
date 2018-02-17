import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './reusable/Avatar';
import ExternalLink from './reusable/ExternalLink';

const PhotoAuthor = ({ name, link, avatar }) => (
  <section>
    <ExternalLink to={link}>
      <Avatar src={avatar} name={name} />
      <h4>{name}</h4>
    </ExternalLink>
  </section>
);

PhotoAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PhotoAuthor;
