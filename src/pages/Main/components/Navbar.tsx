import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNavbar = () => {
  return (
    <Navbar>
      <NavLink to="/" activeClassName="selected">
        Dashboard
      </NavLink>
      <NavLink to="/" activeClassName="selected">
        Audience
      </NavLink>
      <NavLink to="/" activeClassName="selected">
        Pricing
      </NavLink>
      <NavLink to="/" activeClassName="selected">
        Prospecting
      </NavLink>
      <NavLink to="/" activeClassName="selected">
        ROI
      </NavLink>
      <NavLink to="/" activeClassName="selected">
        Upgrade Membership
      </NavLink>
    </Navbar>
  );
};

export default MainNavbar;

const Navbar = styled.nav`
  a {
    text-decoration: none;
    font-size: 12px;
    color: #122434;
    margin-right: 28px;
    .selected {
      border-bottom: 1px solid #122434;
    }
  }
`;
