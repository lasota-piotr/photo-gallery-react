import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import Photo from './Photo';

const CollectionModal = props => {
  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };
  return (
    <Modal isOpen onRequestClose={back}>
      <button onClick={back}>close</button>
      <Photo {...props} />
    </Modal>
  );
};

CollectionModal.propTypes = {};

export default CollectionModal;
