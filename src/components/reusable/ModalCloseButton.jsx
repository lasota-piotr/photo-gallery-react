import React from 'react';
import styled from 'styled-components';
import MdClose from 'react-icons/lib/md/close';

const ModalCloseButtonLayout = styled.button`
  position: fixed;
  right: ${props => props.theme.unitSmall};
  top: ${props => props.theme.unitSmall};
  background: none;
  border: 0;
  font-size: 20px;
`;

const ModalCloseButton = props => (
  <ModalCloseButtonLayout {...props} ariaLabel="Close">
    <MdClose />
  </ModalCloseButtonLayout>
);

export default ModalCloseButton;
