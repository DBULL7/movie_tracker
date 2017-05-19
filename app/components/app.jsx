import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import LoginContainer from './LoginContainer.js'
import CreateAccountContainer from './CreateAccount/CreateAccountContainer'
import FavoritesContainer from './FavoritesContainer'
import { Navbar } from './Navbar'
import getNewFilms from '../helpers/getNewFilms'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="page">
        <Navbar history={this.props.history}/>
        <Switch>
          <Route exact path='/Favorites' render={() => {
            return (
              <FavoritesContainer/>
            )
          }}/>
          <Route exact path='/CreateAccount' render={() => {
            return (
              <CreateAccountContainer history={this.props.history}/>
            )
          }}/>
          <Route exact path='/Login' render={() => {
            return (
              <LoginContainer history={this.props.history}/>
            )
          }}/>
          <Route  exact path='/loggedIn' render={() => {
            return (
              <HomeContainer history={this.props.history}/>
            )
          }}/>
          <Route  exact path='/' render={() => {
            return (
              <HomeContainer history={this.props.history}/>
            )
          }}/>
        </Switch>
      </div>
    )
  }
}
