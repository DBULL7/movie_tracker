import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import CreateAccount from './CreateAccount/CreateAccount.js'
import { Favorites } from './Favorites'
import { Navbar } from './Navbar'
import getNewFilms from '../helpers/getNewFilms'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {},
    }
  }

  componentDidMount () {

    getNewFilms().then((e) => {
      this.setState({movies: e})
      console.log('results', this.state.movies)
    })
  }

  render() {

    return (
      <div id="page">
        <h1>Movie Tracker</h1>
        <Navbar/>
        {console.log('oogah boogah', this.state.movies)}
        <Switch>
          <Route exact path='/Favorites' component={Favorites}/>
          <Route exact path='/CreateAccount' render={() => {
            return (
              <CreateAccount/>
            )
          }}/>
          <Route exact path='/Login' component={Login}/>
          <Route  exact path='/' render={() => {
            return (
              <Home/>
            )
          }}/>
        </Switch>
      </div>
    )
  }
}
