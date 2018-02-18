import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import MdLocationOn from 'react-icons/lib/md/location-on';
import PhotoInfoCounters from './PhotoInfoCounters';
import PhotoExternalLinks from './PhotoExternalLinks';

const PhotoInfo = ({ photoInfoCollapsed, additionalInfoIsLoading }) => {
  const {
    description,
    categories,
    views,
    downloads,
    likes,
    exif,
    location,
    links,
  } = photoInfoCollapsed;
  const country = location && location.country;
  return (
    <div>
      <PhotoExternalLinks
        download={links.download_location}
        unsplash={links.html}
      />
      {description && <p>Description: {description}</p>}
      <PhotoInfoCounters
        likes={likes}
        downloads={downloads}
        views={views}
        additionalInfoIsLoading={additionalInfoIsLoading}
      />
      <ReactPlaceholder
        type="text"
        ready={!additionalInfoIsLoading}
        rows={3}
        color="#E0E0E0"
      >
        {categories.length > 0 && <div>Categories: {categories}</div>}
        {country && (
          <p>
            <MdLocationOn /> {country}
          </p>
        )}
      </ReactPlaceholder>
      <ReactPlaceholder
        type="text"
        ready={!additionalInfoIsLoading}
        rows={6}
        color="#E0E0E0"
      >
        {exif ? (
          <div>
            {exif.make && <div>Camera Make: {exif.make}</div>}
            {exif.model && <div>Camera Model: {exif.model}</div>}
            {exif.focal_length && <div>Focal Length: {exif.focal_length}</div>}
            {exif.aperture && <div>Aperture: {exif.aperture}</div>}
            {exif.exposure_time && (
              <div>Shutter Speed: {exif.exposure_time}</div>
            )}
            {exif.iso && <div>ISO: {exif.iso}</div>}
          </div>
        ) : (
          <span />
        )}
      </ReactPlaceholder>
    </div>
  );
};

PhotoInfo.propTypes = {};

export default PhotoInfo;
