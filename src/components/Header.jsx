import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled(Link)`
  &:hover {
    color: ${props => props.theme.colorGrayDarker};
    text-decoration: none;
  }
`;

const LogoText = styled.h2`
  color: ${props => props.theme.colorText};
  margin-bottom: 0;
`;

const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.unit};
  border-bottom: ${props => props.theme.border};
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  margin: 0;
  list-style: none;
`;

const activeClassName = 'is-active';

const NavLinkItem = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${props => props.theme.colorText};
  &:hover {
    text-decoration: none;
  }
  &.${activeClassName} {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderLayout>
    <Logo to="/">
      <LogoText>Photoflix</LogoText>
    </Logo>
    <Nav>
      <NavList>
        <li>
          <NavLinkItem to="/" exact activeClassName={activeClassName}>
            Home
          </NavLinkItem>
        </li>
      </NavList>
    </Nav>
  </HeaderLayout>
);

export default Header;
