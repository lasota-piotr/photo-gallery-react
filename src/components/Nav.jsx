import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Collections',
    url: '/collections',
  },
];

const Nav = () => (
  <nav>
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <NavLink to={link.url} exact>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
