import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FacebookProvider, { Share, Like } from 'react-facebook';
import FaShareSquareO from 'react-icons/lib/fa/share-square-o';
import { facebookAppId } from '../api/api';

import Button from './reusable/Button';

const PhotoFacebookLayout = styled.div`
  margin-bottom: ${props => props.theme.unit};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PhotoFacebookShare = styled.div`
  margin: ${props => props.theme.unitSmall};
`;

const PhotoFacebookLike = styled.div`
  max-width: 300px;
  max-height: 30px;
  width: 100%;
  overflow: hidden;
`;

const PhotoFacebook = ({ link }) => (
  <PhotoFacebookLayout>
    <FacebookProvider appId={facebookAppId}>
      <PhotoFacebookShare>
        <Share href={link}>
          <Button ghost size="small" muted>
            <FaShareSquareO /> Share on Facebook
          </Button>
        </Share>
      </PhotoFacebookShare>
      <PhotoFacebookLike>
        <Like href={link} />
      </PhotoFacebookLike>
    </FacebookProvider>
  </PhotoFacebookLayout>
);

PhotoFacebook.propTypes = {};

export default PhotoFacebook;
