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
      fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: this.state.email, password: this.state.password})
      }).then((results) => results.json())
        .then((data) => {
        console.log('hey mofo this is the friggin data', data)
        this.props.handleLoginUser({id: data.data.id, email: data.data.email, name: data.data.name})
        localStorage.setItem('MovieTracker', JSON.stringify({id: data.data.id, email: this.state.email, password: this.state.password}))
        this.props.history.replace(`/`)
      }).catch((error) => {
        console.log(error);
        this.setState({email: '', password: '', failed: true})
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
          <input value={this.state.email} name="EmailInput" onChange={(e) => {this.updateState(e.target.value, 'email')}}  className="login-form email" placeholder="Email"/>
          <input value={this.state.password} onChange={(e) => {this.updateState(e.target.value, 'password')}}  className="login-form password" placeholder="Password"/>
          <button disabled={!this.checkInputs()} id="login-button" onClick={() => {this.checkDatabase()}}>Login</button>
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
