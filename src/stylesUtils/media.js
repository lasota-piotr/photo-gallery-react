import { css } from 'styled-components';
import { mqBreakPoints as sizes } from './styleConstants';

/*
* iterate through the sizes and create a media template
* Usage:
const Container = styled.div`
  color: #333;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
`
* */

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
