import React from 'react';
import { LOAD_STATE } from '../constants/constants';
import { downloadPhoto, getPhoto } from '../api/api';
import PhotoView from './PhotoView';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { photoInfo = {}, photoInfoFromCollection = {} } =
      location.state || {};
    this.state = {
      loadStatePhotoInfo: photoInfo.id
        ? LOAD_STATE.SUCCESS
        : LOAD_STATE.LOADING,
      loadStatePhotoInfoFromCollection: photoInfoFromCollection.id
        ? LOAD_STATE.SUCCESS
        : LOAD_STATE.LOADING,
      photoInfo,
      photoInfoFromCollection,
      photoDownloadLink: '',
      loadStateDownloadLink: LOAD_STATE.LOADING,
    };
    this.fetchPhotoInfo = this.fetchPhotoInfo.bind(this);
  }

  componentDidMount() {
    const { photoInfo } = this.state;
    if (!photoInfo.id) {
      this.fetchPhotoInfo();
    } else {
      this.fetchDownloadPhotoLink(photoInfo);
    }
  }

  fetchDownloadPhotoLink(photoInfo) {
    downloadPhoto(photoInfo).then(reposonse => {
      this.setState({
        photoDownloadLink: reposonse.url,
        loadStateDownloadLink: LOAD_STATE.SUCCESS,
      });
    });
  }

  fetchPhotoInfo() {
    const { id } = this.props.match.params;
    getPhoto(id)
      .then(photoInfo => {
        this.setState({
          photoInfo,
          loadStatePhotoInfo: LOAD_STATE.SUCCESS,
        });
        this.fetchDownloadPhotoLink(photoInfo);
      })
      .catch(() => {
        this.setState({ loadStatePhotoInfo: LOAD_STATE.ERROR });
      });
  }

  render() {
    const {
      loadStatePhotoInfo,
      loadStatePhotoInfoFromCollection,
      photoInfo,
      photoInfoFromCollection,
      photoDownloadLink,
      loadStateDownloadLink,
    } = this.state;
    return (
      <PhotoView
        photoDownloadLink={photoDownloadLink}
        loadStateDownloadLink={loadStateDownloadLink}
        loadStatePhotoInfo={loadStatePhotoInfo}
        loadStatePhotoInfoFromCollection={loadStatePhotoInfoFromCollection}
        photoInfoCollapsed={{
          ...photoInfo,
          ...photoInfoFromCollection,
        }}
      />
    );
  }
}

export default Photo;
