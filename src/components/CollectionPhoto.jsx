import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LOAD_STATE } from '../constants/constants';
import { getPhoto } from '../api/api';
import CollectionPhotoInfo from './CollectionPhotoInfo';
import timout from '../helpers/timout';

class CollectionPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: LOAD_STATE.LOADING,
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
          loadState: LOAD_STATE.SUCCESS,
        });
      })
      .catch(() => {
        this.setState({ loadState: LOAD_STATE.ERROR });
      });
  }

  onMouseEnterHandle() {
    this.timeOutMouseEnter = timout(500);
    this.timeOutMouseEnter.promise.then(() => {
      this.setState({ mouseIsOver: true });
      if (this.state.loadState !== LOAD_STATE.SUCCESS) {
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
    const { mouseIsOver, loadState, photoInfo } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseEnterHandle}
        onMouseLeave={this.onMouseLeaveHandle}
      >
        <img src={photo.urls.small} />
        {mouseIsOver && (
          <CollectionPhotoInfo
            likes={photo.likes}
            photoInfoIsLoading={loadState === LOAD_STATE.LOADING}
            photoInfo={photoInfo}
          />
        )}
      </div>
    );
  }
}

CollectionPhoto.propTypes = {};

export default CollectionPhoto;
