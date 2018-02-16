import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Share, Like } from 'react-facebook';
import { facebookAppId } from '../../data';

const PhotoContentBody = ({ photoInfoCollapsed }) => {
  const { links } = photoInfoCollapsed;
  console.log(photoInfoCollapsed);
  return (
    <div>
      <FacebookProvider appId={facebookAppId}>
        <Share href={links.html}>
          <button>Share on Facebook!</button>
        </Share>
        <Like href={links.html} />
      </FacebookProvider>
    </div>
  );
};

PhotoContentBody.propTypes = {};

export default PhotoContentBody;
