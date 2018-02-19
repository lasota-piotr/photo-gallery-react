import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoImage from './PhotoImage';
import PhotoContentBody from './PhotoContentBody';
import { LOAD_STATE } from '../constants/constants';

const PhotoContentLayout = styled.div`
  padding-top: ${props => props.theme.unit};
  margin-bottom: ${props => props.theme.unit};
`;

const PhotoContent = ({ photoInfoCollapsed, loadStatePhotoInfo, photoDownloadLink, loadStateDownloadLink }) => (
  <PhotoContentLayout>
    <PhotoImage
      srcRegular={photoInfoCollapsed.urls.regular}
      srcSmall={photoInfoCollapsed.urls.small}
      alt={
        photoInfoCollapsed.description || photoInfoCollapsed.categories.join()
      }
    />
    <PhotoContentBody
      photoDownloadLink={photoDownloadLink}
      photoInfoCollapsed={photoInfoCollapsed}
      additionalInfoIsLoading={loadStatePhotoInfo === LOAD_STATE.LOADING}
      downloadLinkIsLoading={loadStateDownloadLink === LOAD_STATE.LOADING}
    />
  </PhotoContentLayout>
);

PhotoContent.propTypes = {};

export default PhotoContent;
