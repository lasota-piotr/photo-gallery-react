import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Photo from './Photo';

const CollectionModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const CollectionModal = props => {
  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };
  return (
    <CollectionModalOverlay>
      <button onClick={back}>close</button>
      <Photo {...props} />
    </CollectionModalOverlay>
  );
};

CollectionModal.propTypes = {};

export default CollectionModal;
