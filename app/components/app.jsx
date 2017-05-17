import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import { Login } from './Login'
import CreateAccount from './CreateAccount/CreateAccount.js'
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

  componentWillMount () {
     fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=943e4f5ccf1cdbbcab342f134a46713a&language=en-US&page=1')
        .then(response => response.json())
        .then((movies) => (this.props.handleUpcomingFilms(movies)))
  }

  test() {
    if(this.props.upcomingFilms[0]) {
      return (
        <div>
          {this.props.upcomingFilms[0].title}
        </div>
      )
    }
  }


  render() {
    return (
      <div id="page">
        <h1>Movie Tracker</h1>
        {this.test()}
        <Navbar/>
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
              <HomeContainer />
            )
          }}/>
        </Switch>
      </div>
    )
  }
}
