import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "activeClassName" : undefined)}
    >
      Home
    </NavLink>
    <NavLink
      to="/create"
      className={({ isActive }) => (isActive ? "activeClassName" : undefined)}
    >
      Create Expense
    </NavLink>
    <NavLink
      to="/edit"
      className={({ isActive }) => (isActive ? "activeClassName" : undefined)}
    >
      Edit Expense
    </NavLink>
    <NavLink
      to="/help"
      className={({ isActive }) => (isActive ? "activeClassName" : undefined)}
    >
      Help
    </NavLink>
  </header>
);

export default Header;