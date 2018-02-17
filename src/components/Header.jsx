import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => (
  <header>
    <h2>Photoflix</h2>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;


