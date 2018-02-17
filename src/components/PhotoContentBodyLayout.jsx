import styled from 'styled-components';
import media from '../stylesUtils/media';

const PhotoContentBodyLayout = styled.section`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.unitHuge};
  padding-right: ${props => props.theme.unitHuge};
  ${media.tablet`
    padding-left: ${props => props.theme.unitSmall};
    padding-right: ${props => props.theme.unitSmall};
  `};
`;

export default PhotoContentBodyLayout;
