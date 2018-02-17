import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colorGrayLight};
  display: inline-block;
  vertical-align: middle;
  font: inherit;
  text-align: center;
  margin: 0;
  cursor: pointer;
  padding: ${props => props.theme.unitSmall} ${props => props.theme.unit};
  transition: ease;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colorPrimary};

      &,
      &:hover,
      &:active,
      &:focus {
        text-decoration: none;
        color: ${props => props.theme.textColor};
      }

      &:hover,
      &:focus {
        background-color: ${props => props.theme.colorPrimaryDark};
      }
    `}
  
  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.colorSecondary};

      &,
      &:hover,
      &:active,
      &:focus {
        text-decoration: none;
        color: ${props => props.theme.textColor};
      }

      &:hover,
      &:focus {
        background-color: ${props => props.theme.colorSecondaryDark};
      }
    `}
  
  
  ${props =>
    props.size === 'small' &&
    css`
      padding: ${props => props.theme.unitTiny}
        ${props => props.theme.unitSmall};
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      padding: ${props => props.theme.unit} ${props => props.theme.unitLarge};
    `}
  
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  
  ${props =>
    props.ghost &&
    css`
      border: 2px solid currentColor;
      padding: calc(${props => props.theme.unitSmall} - 2px)
        calc(${props => props.theme.unit} - 2px);
      &,
      &:hover,
      &:active,
      &:focus {
        background: none;
      }
    `}
  
  ${props =>
    props.ghost &&
    props.size === 'small' &&
    css`
      padding: calc(${props => props.theme.unitTiny} - 2px)
        calc(${props => props.theme.unitSmall} - 2px);
    `}
  
  ${props =>
    props.ghost &&
    props.size === 'large' &&
    css`
      padding: calc(${props => props.theme.unit} - 2px) calc(1.5rem - 2px);
    `}
  
  ${props =>
    props.ghost &&
    props.primary &&
    css`
      color: ${props => props.theme.colorPrimary};

      &:hover,
      &:focus {
        color: ${props => props.theme.colorPrimaryDark};
      }
    `}
  
  ${props =>
    props.ghost &&
    props.secondary &&
    css`
      color: ${props => props.theme.colorSecondary};

      &:hover,
      &:focus {
        color: ${props => props.theme.colorSecondaryDark};
      }
    `}
  
  ${props =>
    props.ghost &&
    props.muted &&
    css`
      color: ${props => props.theme.colorGrayDark};
      border-color: ${props => props.theme.colorGray};
      &:hover,
      &:focus {
        color: ${props => props.theme.colorGrayVeryDarkDark};
      }
    `}
`;

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  muted: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  ghost: false,
  muted: false,
  children: '',
  size: undefined,
  fullWidth: false,
};

export default Button;
