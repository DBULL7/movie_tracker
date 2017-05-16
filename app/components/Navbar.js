import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <section id='navBar'>
      <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/Login' activeClassName='selected'>Login</NavLink>
      <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
      <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>

    </section>
  );
}
