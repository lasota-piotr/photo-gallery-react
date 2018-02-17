import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarImg = styled.img`
  width: ${props => props.theme.unitXxlarge};
  height: ${props => props.theme.unitXxlarge};
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

const Avatar = ({ name, src }) => <AvatarImg src={src} alt={name} />;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Avatar;
