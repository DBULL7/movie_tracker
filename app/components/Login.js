import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      failed: false,
    }
  }

  updateState(input, stateKey) {
    this.setState({[stateKey]: input})
  }

  checkInputs() {
    return (this.state.email !== '' && this.state.password !== '')
  }

  checkDatabase() {
    if (this.checkInputs()){
      fetch('/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: this.state.email, password: this.state.password})
      }).then((results) => results.json())
        .then((data) => {
        console.log(data)
        this.props.handleLoginUser({id: data.data.id, email: data.data.email, name: data.data.name})
        localStorage.setItem('MovieTracker', JSON.stringify({id: data.data.id, email: this.state.email, password: this.state.password}))
        this.props.history.replace(`/`)
      }).catch((error) => {
        this.setState({failed: true})
      })
    }
  }

  fadeOut() {
    setTimeout(() => {
      this.setState({failed: false})
    }, 2500)
  }

  failedMessage() {
    if (this.state.failed) {
      return (
        <div className="failed-login">Username or password incorrect. Please Try Again.
          {this.fadeOut()}
        </div>
      )
    }
  }

  logout() {
    console.log('CHECKCHECKCHECK', this.props);
    this.props.handleResetFavorites({})
    this.props.handleLoginUser({})
    localStorage.clear()
    this.props.history.replace('/')
  }

  conditionalRender() {
    if(this.props.loginUser.email != undefined) {
      return(
        <div className="logout">
          {this.logout()}
        </div>
      )
    } else {
      return (
        <section id="login">
          {this.failedMessage()}
          <h2 id="login-title">Log In</h2>
          <input onChange={(e) => {this.updateState(e.target.value, 'email')}}  className="login-form" placeholder="Email"/>
          <input onChange={(e) => {this.updateState(e.target.value, 'password')}}  className="login-form" placeholder="Password"/>
          <button id="login-button" onClick={() => {this.checkDatabase()}}>Login</button>
        </section>
      )
    }
  }

  render() {
    return (
      <div>
        {this.conditionalRender()}
      </div>
    )
  }
}

export default Login
