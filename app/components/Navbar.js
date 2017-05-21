import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export const Navbar = (props) => {
  const { loggedIn } = props
  return (
    <section id='navBar'>
      <NavLink className='movie-tracker' to='/'>Movie Tracker</NavLink>
      <section>
        <Switch>
          <Route  exact path='/' render={() => {
            if(loggedIn.email != undefined) {
              return (
                <section className='navbar-links'>
                  <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
                  <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
                </section>
              )
            } else {
              return (
                <section className="navbar-links">
                  <NavLink to='/Login' activeClassName='selected'>Log In</NavLink>
                  <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>
                </section>
              )
            }
          }}/>
          <Route exact path='/Favorites' render={() => {
            return (
              <section className='navbar-links'>
                <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
                <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
              </section>
            )
          }}/>
        </Switch>
      </section>
    </section>
  );
}

// <Route exact path='/loggedIn' render={() => {
//   return (
//     <section className='navbar-links'>
//       <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
//       <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
//     </section>
//   )
// }}/>
