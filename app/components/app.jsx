import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import { Login } from './Login'
import CreateAccountContainer from './CreateAccount/CreateAccountContainer'
import { Favorites } from './Favorites'
import { Navbar } from './Navbar'
import getNewFilms from '../helpers/getNewFilms'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: {},
    }
  }

  render() {
    const { upcomingFilms } = this.props

    return (
      <div id="page">
        <h1>Movie Tracker</h1>
        <div>
          {upcomingFilms}
        </div>
        <Navbar/>
        <Switch>
          <Route exact path='/Favorites' component={Favorites}/>
          <Route exact path='/CreateAccount' render={() => {
            return (
              <CreateAccountContainer/>
            )
          }}/>
          <Route exact path='/Login' component={Login}/>
          <Route  exact path='/' render={() => {
            return (
              <HomeContainer />
            )
          }}/>
        </Switch>
      </div>
    )
  }
}
