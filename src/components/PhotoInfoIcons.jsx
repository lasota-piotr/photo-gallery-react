import styled from 'styled-components';
import GoHeart from 'react-icons/lib/go/heart';
import MdFileDownload from 'react-icons/lib/md/file-download';
import FaEye from 'react-icons/lib/fa/eye';

const photoInfoIcon = iconComponent => styled(iconComponent)`
  width: ${props => props.theme.unitLarge};
  height: ${props => props.theme.unitLarge};
  fill: ${props => props.theme.colorGray};
`;

export const PhotoInfoIconHeart = photoInfoIcon(GoHeart);
export const PhotoInfoIconDownload = photoInfoIcon(MdFileDownload);
export const PhotoInfoIconView = photoInfoIcon(FaEye);
