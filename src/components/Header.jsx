import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div>
      <div>CLEAN-AIR</div>
      <nav>
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <NavLink to="/Detail" className="details">
          Detail
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
