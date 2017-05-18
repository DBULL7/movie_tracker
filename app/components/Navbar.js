import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export const Navbar = (props) => {
  console.log(props);
  return (
    <section id='navBar'>
      <h1>Movie Tracker</h1>
      <section className="navbar-links">
        <Switch>
          <Route  exact path='/' render={() => {
            return (
              <section>
                <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
                <NavLink to='/Login' activeClassName='selected'>Login</NavLink>
                <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>
              </section>
            )
          }}/>
          <Route exact path='/loggedIn' render={() => {
            return (
              <section>
                <NavLink exact to='/loggedIn' activeClassName='selected'>Home</NavLink>
                {/* <NavLink to='/Login' activeClassName='selected'>Login</NavLink> */}
                <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
                {/* <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink> */}
              </section>
            )
          }}/>
          <Route exact path='/Favorites' render={() => {
            return (
              <section>
                <NavLink exact to='/loggedIn' activeClassName='selected'>Home</NavLink>
                {/* <NavLink to='/Login' activeClassName='selected'>Login</NavLink> */}
                {/* <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink> */}
                {/* <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink> */}
              </section>
            )
          }}/>
        </Switch>
      </section>
    </section>
  );
}

{/* <Route path='/' render={() => {
  return(
    <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
    <NavLink to='/Login' activeClassName='selected'>Login</NavLink>
    <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
    <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>
  )
}}/> */}
