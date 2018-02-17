import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ExternalLinkLayout = styled.a`
  &:hover {
    ${props =>
      props.noUnderline &&
      css`
        text-decoration: none;
      `};
  }
`;

const ExternalLink = ({ to, children, noUnderline }) => (
  <ExternalLinkLayout
    href={to}
    target="_blank"
    rel="noopener"
    noUnderline={noUnderline}
  >
    {children}
  </ExternalLinkLayout>
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  noUnderline: PropTypes.bool,
};

ExternalLink.defaultProps = {
  noUnderline: false,
};

export default ExternalLink;
