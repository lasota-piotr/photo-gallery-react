import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';
import MdFileDownload from 'react-icons/lib/md/file-download';
import Button from './reusable/Button';
import ExternalLink from './reusable/ExternalLink';

const PhotoExternalLinksLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.unit};
`;

const PhotoExternalLinksItem = styled.div`
  margin: ${props => props.theme.unit};
  margin-top: 0;
`;

const PhotoExternalLinks = ({ download, unsplash, downloadLinkIsLoading }) => (
  <PhotoExternalLinksLayout>
    <PhotoExternalLinksItem>
      <ReactPlaceholder
        type="rect"
        ready={!downloadLinkIsLoading}
        style={{ width: 118, height: 40, backgroundColor: '#eaeaea' }}
      >
        <ExternalLink to={download}>
          <Button primary size="small">
            <MdFileDownload /> Download
          </Button>
        </ExternalLink>
      </ReactPlaceholder>
    </PhotoExternalLinksItem>

    <PhotoExternalLinksItem>
      <ExternalLink to={unsplash}>
        <Button ghost muted size="small">
          View on Unsplash.com
        </Button>
      </ExternalLink>
    </PhotoExternalLinksItem>
  </PhotoExternalLinksLayout>
);

PhotoExternalLinks.propTypes = {};

export default PhotoExternalLinks;
