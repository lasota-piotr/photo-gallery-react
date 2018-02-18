import React from 'react';
import styled from 'styled-components';

const LoadingLayout = styled.div`
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;

  border-top: 4px solid ${props => props.theme.colorGrayLight};
  border-right: 4px solid ${props => props.theme.colorGrayLight};
  border-bottom: 4px solid ${props => props.theme.colorGray};
  border-left: 4px solid ${props => props.theme.colorGray};
  animation: loading 1.2s infinite linear;
  font-size: 0;
`;

const Loading = () => <LoadingLayout>Loading</LoadingLayout>;

export default Loading;
