import React from 'react';
import PropTypes from 'prop-types';
import { LOAD_STATE } from '../constants/constants';
import { getPhoto } from '../api/api';
import timeout from '../helpers/timout';
import CollectionPhotoContent from './CollectionPhotoContent';

class CollectionPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadStatePhotoInfo: LOAD_STATE.LOADING,
      photoInfo: {},
      mouseIsOver: false,
    };
    this.fetchPhotoInfo = this.fetchPhotoInfo.bind(this);
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this);
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this);
  }

  onMouseEnterHandle() {
    this.timeOutMouseEnter = timeout(500);
    this.timeOutMouseEnter.promise.then(() => {
      this.setState({ mouseIsOver: true });
      if (this.state.loadStatePhotoInfo !== LOAD_STATE.SUCCESS) {
        this.fetchPhotoInfo();
      }
    });
  }

  onMouseLeaveHandle() {
    if (this.timeOutMouseEnter && this.timeOutMouseEnter.cancel) {
      this.timeOutMouseEnter.cancel();
    }

    this.setState({ mouseIsOver: false });
  }

  fetchPhotoInfo() {
    const { id } = this.props.photo;
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
    const { photo } = this.props;
    const { mouseIsOver, loadStatePhotoInfo, photoInfo } = this.state;
    return (
      <CollectionPhotoContent
        mouseIsOver={mouseIsOver}
        photoInfoIsLoading={loadStatePhotoInfo === LOAD_STATE.LOADING}
        photoInfoFromCollection={photo}
        photoInfo={photoInfo}
        onMouseEnterHandle={this.onMouseEnterHandle}
        onMouseLeaveHandle={this.onMouseLeaveHandle}
      />
    );
  }
}

CollectionPhoto.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default CollectionPhoto;
