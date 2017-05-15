import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navBar'>
      <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/Login' activeClassName='selected'>Login</NavLink>
      <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
      <NavLink to='/CreateAccount' activeClassName='selected'>CreateAccount</NavLink>

    </div>
  );
}
