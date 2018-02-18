import styled from 'styled-components';
import media from '../stylesUtils/media';

const CollectionsLayout = styled.div`
  padding-top: ${props => props.theme.unitLarge};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: ${props => props.theme.unitLarge};
  ${media.xmobile`
    grid-template-columns: 1fr;
  `};
`;

export default CollectionsLayout;
