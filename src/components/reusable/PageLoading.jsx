import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const PageLoadingLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;

const PageLoading = () => (
  <PageLoadingLayout>
    <Loading />
  </PageLoadingLayout>
);

export default PageLoading;
