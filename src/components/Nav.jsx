import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
