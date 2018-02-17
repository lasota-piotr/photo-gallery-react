import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './reusable/Avatar';
import ExternalLink from './reusable/ExternalLink';

const PhotoAuthorLayout = styled.section`
  display: flex;
  align-items: center;
`;

const PhotoAuthorTitle = styled.h4`
  margin-bottom: 0;
  margin-left: ${props => props.theme.unit};
`;

const PhotoAuthor = ({ name, link, avatar }) => (
  <PhotoAuthorLayout>
    <ExternalLink to={link}>
      <Avatar src={avatar} name={name} />
    </ExternalLink>
    <ExternalLink to={link} noUnderline>
      <PhotoAuthorTitle>{name}</PhotoAuthorTitle>
    </ExternalLink>
  </PhotoAuthorLayout>
);

PhotoAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PhotoAuthor;
