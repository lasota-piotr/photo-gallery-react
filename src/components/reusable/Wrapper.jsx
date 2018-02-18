import styled from 'styled-components';

const wrapperMaxWidth = '1200px';

const Wrapper = styled.div`
  padding-right: ${props => props.theme.unit};
  padding-left: ${props => props.theme.unit};
  margin-right: auto;
  margin-left: auto;
  max-width: ${wrapperMaxWidth};
`;

export default Wrapper;
