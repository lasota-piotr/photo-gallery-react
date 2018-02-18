import React, { Component } from 'react';
import { LOAD_STATE } from '../constants/constants';
import { getPhoto } from '../api/api';
import timout from '../helpers/timout';
import CollectionPhotoContent from './CollectionPhotoContent';

class CollectionPhoto extends Component {
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
    this.timeOutMouseEnter = {};
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

  onMouseEnterHandle() {
    this.timeOutMouseEnter = timout(500);
    this.timeOutMouseEnter.promise.then(() => {
      this.setState({ mouseIsOver: true });
      if (this.state.loadStatePhotoInfo !== LOAD_STATE.SUCCESS) {
        this.fetchPhotoInfo();
      }
    });
  }

  onMouseLeaveHandle() {
    this.timeOutMouseEnter.cancel();
    this.setState({ mouseIsOver: false });
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

CollectionPhoto.propTypes = {};

export default CollectionPhoto;
