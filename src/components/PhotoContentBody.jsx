import React from 'react';
import PhotoAuthor from './PhotoAuthor';
import PhotoInfo from './PhotoInfo';
import PhotoContentBodyLayout from './PhotoContentBodyLayout';
import Hr from './reusable/Hr';
import PhotoFacebook from './PhotoFacebook';

const PhotoContentBody = ({ photoInfoCollapsed, additionalInfoIsLoading }) => {
  const { links, user } = photoInfoCollapsed;
  return (
    <PhotoContentBodyLayout>
      <PhotoAuthor
        avatar={user.profile_image ? user.profile_image.medium : ''}
        link={user.links.html}
        name={user.name || user.username}
      />
      <Hr />
      <PhotoInfo
        photoInfoCollapsed={photoInfoCollapsed}
        additionalInfoIsLoading={additionalInfoIsLoading}
      />
      <PhotoFacebook link={links.html} />
    </PhotoContentBodyLayout>
  );
};

PhotoContentBody.propTypes = {};

export default PhotoContentBody;
