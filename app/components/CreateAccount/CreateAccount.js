import React, { Component } from 'react'
 import { Route , Redirect } from 'react-router'

export default class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        retypedPassword: ''
    }
  }

  updateState(input, stateKey) {
    this.setState({[stateKey]: input})
  }


  emailRegex() {
    if (this.state.email !== '') {
      //stack overflow regex
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(this.state.email)
    }
  }


  passwordsMatch() {
    if (this.state.retypedPassword !== '' && this.state.password === this.state.retypedPassword) {
      return true
    }
  }

  nameAndEmail() {
    if(this.state.name !== '' && this.emailRegex()) {
      return true
    }
  }

  test() {
    if(this.passwordsMatch() && this.nameAndEmail()) {
      fetch("api/users/new", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name,
               email: this.state.email,
               password: this.state.password})
      }).then((response) => {
        this.props.handleCreateAccount(this.state)
        console.log(response)
        this.props.history.replace('/')
      })
    }
  }

  render() {
    return (
      <section id="CreateAccount">
        <article id="form">
          <h2 id="create-account-title">Create Account</h2>
          <input value={this.state.name} onChange={(e) => {this.updateState(e.target.value, 'name')}} className="create-account-form" type='text' placeholder='Name'/>
          <input value={this.state.email} onChange={(e) => {this.updateState(e.target.value, 'email')}} className="create-account-form" type='text' placeholder='Email'/>
          <input type="password" value={this.state.password}  onChange={(e) => {this.updateState(e.target.value, 'password')}} className="create-account-form" type='text' placeholder='Enter Your Password'/>
          <input type={"password"} value={this.state.retypedPassword} onChange={(e) => {this.updateState(e.target.value, 'retypedPassword')}} className="create-account-form" type='text' placeholder='Retype Your Password'/>
          <button onClick={() => {this.test()}} className="create-account-button">Create Account</button>
        </article>

      </section>

    )
  }
}
