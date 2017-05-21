import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import LoginContainer from './LoginContainer.js'
import CreateAccountContainer from './CreateAccount/CreateAccountContainer'
import FavoritesContainer from './FavoritesContainer'
import { Navbar } from './Navbar'
import getNewFilms from '../helpers/getNewFilms'
import { Movie } from './movieCard'
import { checkLocalStorage, autoLogin }  from '../helpers/checkLocalStorage'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  handleAutoLogin() {
    const { loginUser } = this.props.state
    if(loginUser.email) {
      return
    } else {
      let localStorageExists = autoLogin(checkLocalStorage())
      if (localStorageExists) {
        this.props.handleLoginUser(localStorageExists)
        this.getAllFavorites(localStorageExists.id)
      }
    }
  }

  getAllFavorites(id) {
    fetch(`api/users/${id}/favorites`)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      this.props.handleGetAllFavorites(data.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  checkUser() {
    console.log('SHAKE IT',this.props.loginUser);
    if(this.props.loginUser != undefined) {
      return this.props.loginUser.name
    } else {
      return 'none'
    }
  }

  render() {
    console.log(this.checkUser());
    return (
      <div id="page">
        <Navbar history={this.props.history} loggedIn={this.checkUser()}/>
        {this.handleAutoLogin()}

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
