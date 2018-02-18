import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoHeart from 'react-icons/lib/go/heart';
import MdFileDownload from 'react-icons/lib/md/file-download';
import MdLocationOn from 'react-icons/lib/md/location-on';
import Loading from './reusable/Loading';

const CollectionPhotoInfoLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 20%;
  padding-top: 30%;
  font-size: 19px;
  color: ${props => props.theme.colorGrayDark};
`;

const CollectionPhotoInfoItem = styled.div`
  margin-bottom: 15%;
`;

const CollectionPhotoInfoIcon = styled.div`
  font-size: 25px;
  color: ${props => props.theme.colorBrandDark};
  margin-right: ${props => props.theme.unitSmall};
  display: inline-block;
`;

const CollectionPhotoInfo = ({ likes, photoInfoIsLoading, photoInfo }) => {
  const { downloads, location } = photoInfo;
  const country = location && location.country;
  return (
    <CollectionPhotoInfoLayout>
      <CollectionPhotoInfoItem>
        <CollectionPhotoInfoIcon>
          <GoHeart aria-label="Likes" />
        </CollectionPhotoInfoIcon>
        {likes}
      </CollectionPhotoInfoItem>
      {photoInfoIsLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <CollectionPhotoInfoItem>
            <CollectionPhotoInfoIcon>
              <MdFileDownload aria-label="Downloads" />
            </CollectionPhotoInfoIcon>
            {downloads}
          </CollectionPhotoInfoItem>
          {country && (
            <CollectionPhotoInfoItem>
              <CollectionPhotoInfoIcon>
                <MdLocationOn aria-label="Country" />
              </CollectionPhotoInfoIcon>
              {country}
            </CollectionPhotoInfoItem>
          )}
        </Fragment>
      )}
    </CollectionPhotoInfoLayout>
  );
};

CollectionPhotoInfo.propTypes = {};

export default CollectionPhotoInfo;
