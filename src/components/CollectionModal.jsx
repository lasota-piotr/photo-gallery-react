import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Photo from './Photo';
import ModalCloseButton from './reusable/ModalCloseButton';

const CollectionModal = props => {
  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };
  return (
    <Modal
      isOpen
      onRequestClose={back}
      style={{ overlay: { zIndex: 2 } }}
      contentLabel="Page of photo"
      appElement={document.querySelector('#root')}
    >
      <ModalCloseButton onClick={back} />
      <Photo {...props} />
    </Modal>
  );
};

CollectionModal.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default CollectionModal;
