import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Share, Like } from 'react-facebook';
import ReactPlaceholder from 'react-placeholder';
import { facebookAppId } from '../../data';
import PhotoAuthor from './PhotoAuthor';
import ExternalLink from './reusable/ExternalLink';
import Loading from './Loading';

const PhotoContentBody = ({ photoInfoCollapsed, additionalInfoIsLoading }) => {
  const {
    links,
    user,
    description,
    categories,
    views,
    downloads,
    likes,
    location,
    exif,
  } = photoInfoCollapsed;
  const country = location && location.country;
  console.log(photoInfoCollapsed);
  return (
    <div>
      <PhotoAuthor
        avatar={user.profile_image.medium}
        link={user.links.html}
        name={user.name || user.username}
      />
      <div>
        {description && <div>Description: {description}</div>}
        <div>Likes: {likes}</div>
        <ReactPlaceholder
          type="text"
          ready={!additionalInfoIsLoading}
          rows={3}
          color="#E0E0E0"
        >
          <div>Downloads: {downloads}</div>
          <div>Views: {views}</div>
          {categories.length > 0 && <div>Categories: {categories}</div>}
          {country && <div>Location: {country}</div>}
        </ReactPlaceholder>
        <ReactPlaceholder
          type="text"
          ready={!additionalInfoIsLoading}
          rows={6}
          color="#E0E0E0"
        >
          {exif && (
            <div>
              {exif.make && <div>Camera Make: {exif.make}</div>}
              {exif.model && <div>Camera Model: {exif.model}</div>}
              {exif.focal_length && (
                <div>Focal Length: {exif.focal_length}</div>
              )}
              {exif.aperture && <div>Aperture: {exif.aperture}</div>}
              {exif.exposure_time && (
                <div>Shutter Speed: {exif.exposure_time}</div>
              )}
              {exif.iso && <div>ISO: {exif.iso}</div>}
            </div>
          )}
        </ReactPlaceholder>

        <ExternalLink to={links.download}>Download</ExternalLink>
        <ExternalLink to={links.html}>View image on Unsplash.com</ExternalLink>
      </div>
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
