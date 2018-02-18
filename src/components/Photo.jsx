import React from 'react';
import PhotoImage from './PhotoImage';
import { LOAD_STATE } from '../constants/constants';
import { getPhoto } from '../api/api';
import Loading from './reusable/Loading';
import PhotoView from './PhotoView';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { photoInfo = {}, photoInfoFromCollection = {} } =
      location.state || {};
    this.state = {
      loadStatePhotoInfo:
        Object.keys(photoInfo).length > 0
          ? LOAD_STATE.SUCCESS
          : LOAD_STATE.LOADING,
      loadStatePhotoInfoFromCollection:
        Object.keys(photoInfoFromCollection).length > 0
          ? LOAD_STATE.SUCCESS
          : LOAD_STATE.LOADING,
      photoInfo,
      photoInfoFromCollection,
    };
    this.fetchPhotoInfo = this.fetchPhotoInfo.bind(this);
  }

  componentDidMount() {
    const { photoInfo = {} } = this.props.location.state = {};
    if (Object.keys(photoInfo).length <= 0) {
      this.fetchPhotoInfo();
    }
  }

  fetchPhotoInfo() {
    console.log('fetchPhotoInfo');
    const { id } = this.props.match.params;
    getPhoto(id)
      .then(photoInfo => {
        this.setState({
          photoInfo,
          loadStatePhotoInfo: LOAD_STATE.SUCCESS,
        });
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
    } = this.state;
    return (
      <PhotoView
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
