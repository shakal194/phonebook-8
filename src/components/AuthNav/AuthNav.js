import React from 'react';
import { styleLink, activeStyleLink } from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Log in
      </NavLink>
    </div>
  );
}
