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

  updateEmail(input) {
    this.setState({email: input})
  }

  updatePassword(input) {
    this.setState({password: input})
  }

  checkDatabase() {
    if (this.state.email !== '' && this.state.password !== '') {
      fetch('/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: this.state.email, password: this.state.password})
      }).then((results) => {
        if (results.status === 200) {
          this.props.handleLoginUser({email: this.state.email, password: this.state.password})
          this.props.history.replace(`/`)
        } else {
          this.setState({failed: true})
          console.log(results)
        }
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

  render() {
    return (
      <section id="login">
        {this.failedMessage()}
        <h2 id="login-title">Login</h2>
        <input onChange={(e) => {this.updateEmail(e.target.value)}}  className="login-form" placeholder="Email"/>
        <input onChange={(e) => {this.updatePassword(e.target.value)}}  className="login-form" placeholder="Password"/>
        <button id="login-button" onClick={() => {this.checkDatabase()}}>Login</button>
      </section>
    )
  }
}

export default Login
