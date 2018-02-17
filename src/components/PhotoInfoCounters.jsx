import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';
import {
  PhotoInfoIconDownload,
  PhotoInfoIconHeart,
  PhotoInfoIconView,
} from './PhotoInfoIcons';
import media from '../stylesUtils/media';

const PhotoInfoCountersLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoInfoCounterItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.unit};
  padding-right: ${props => props.theme.unit};
  margin-bottom: ${props => props.theme.unit};
  ${media.tablet`
    margin-left: ${props => props.theme.unit};
  `};
`;

const PhotoInfoCounterText = styled.span`
  margin-left: ${props => props.theme.unitSmall};
`;

const PhotoInfoCounters = ({
  likes,
  downloads,
  views,
  additionalInfoIsLoading,
}) => (
  <PhotoInfoCountersLayout>
    <PhotoInfoCounterItem>
      <PhotoInfoIconHeart />
      <PhotoInfoCounterText>{likes}</PhotoInfoCounterText>
    </PhotoInfoCounterItem>

    <ReactPlaceholder
      type="text"
      ready={!additionalInfoIsLoading}
      rows={2}
      color="#E0E0E0"
    >
      {downloads && (
        <PhotoInfoCounterItem>
          <PhotoInfoIconDownload />
          <PhotoInfoCounterText>{downloads}</PhotoInfoCounterText>
        </PhotoInfoCounterItem>
      )}
      {views && (
        <PhotoInfoCounterItem>
          <PhotoInfoIconView />{' '}
          <PhotoInfoCounterText>{views}</PhotoInfoCounterText>
        </PhotoInfoCounterItem>
      )}
    </ReactPlaceholder>
  </PhotoInfoCountersLayout>
);

PhotoInfoCounters.propTypes = {};

export default PhotoInfoCounters;
