import styled from 'styled-components';

const Hr = styled.hr`
  border: 1px solid ${props => props.theme.colorGrayLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding-top: ${props => props.theme.unit};
`;

export default Hr;
