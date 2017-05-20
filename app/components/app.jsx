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

  test() {
    async function test2 () {
      let test3 =  await autoLogin(checkLocalStorage())
      console.log(test3);
    }
  }
  render() {

    return (
      <div id="page">
        <Navbar history={this.props.history} />
        {this.test()}
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
          <Route exact path='/:id' render={({match}) => {
            const { upcomingFilms } = this.props.state
            const movie = upcomingFilms.find((movie) => movie.id === parseInt(match.params.id))
            return (
              <Movie {...movie}/>
            )
          }}/>
        </Switch>
      </div>
    )
  }
}
